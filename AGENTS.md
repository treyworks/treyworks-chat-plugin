# AGENTS.md

This file provides guidance for AI coding agents working on the Treyworks Chat Plugin for WordPress.

## Project Overview

The Treyworks Chat Plugin is a WordPress plugin that provides intelligent chatbot capabilities in two formats:
- **Text Chat Widgets**: Powered by OpenAI Chat Completions API
- **Voice Chat Widgets**: Powered by RetellAI for interactive voice conversations

The plugin includes a comprehensive admin interface built with React, database logging system, reporting dashboard, and customizable widget styling.

## Technology Stack

### Backend
- **Language**: PHP 8.1+
- **Framework**: WordPress 6.6+
- **Database**: WordPress database (MySQL/MariaDB) with custom tables
- **Dependencies**: Managed via Composer
  - OpenAI PHP Client
  - Profanity filtering library

### Frontend
- **Admin Interface**: React with Vite build system
- **Chat Widget**: Vanilla JavaScript with esbuild
- **Voice Widget**: JavaScript with RetellAI SDK and esbuild
- **Styling**: CSS with CSS custom properties (variables)

## Setup Commands

### Initial Setup
```bash
# Install PHP dependencies
composer install

# Install admin app dependencies
cd admin/app
npm install

# Install chat widget dependencies
cd ../../widgets/chat-widget
npm install

# Install voice widget dependencies
cd ../voice-widget
npm install
```

### Development
```bash
# Build admin app (React)
cd admin/app
npm run build

# Build chat widget
cd widgets/chat-widget
npm run build

# Build voice widget
cd widgets/voice-widget
npm run build
```

### Testing
- Manual testing in WordPress environment (DevKinsta or similar)
- Test both text and voice widgets across different WordPress themes
- Verify database logging and admin interface functionality

## Core Principles

### Code Reuse & Modularity
- **Always check for existing components, utilities, and patterns before creating new ones**
- Reuse existing React components, CSS classes, and PHP methods wherever possible
- Extract shared logic into reusable functions or components rather than duplicating code
- When adding a new feature, study how similar features are already implemented and follow the same approach

### Follow Existing Design Patterns
- **Match the structure and conventions of existing code** — new code should look like it belongs
- Use the established admin AJAX pattern: register action → callback method → nonce verification → capability check → response
- Follow the existing React component patterns: functional components, hooks for state, AJAX via `fetch` with nonce
- Reuse existing CSS classes and variables before creating new ones
- When styling new components, first check `Admin.css` and widget CSS files for applicable existing styles
- New CSS classes should follow the existing naming conventions (`tw-chat-*`, `tw-voice-*`, `tw-admin-*`)

### Widget Preview Sync
- The Style Customizer admin page includes a live preview of both widgets
- Shared HTML templates in `/widgets/shared/templates/` define the canonical widget DOM structure
- **When modifying widget markup** (class names, DOM hierarchy, new elements):
  1. Update the shared template in `/widgets/shared/templates/`
  2. Update the widget app's render method to match
  3. Update the admin `StylePreview.jsx` component if it references the template
- The preview uses the same CSS files as the widgets — CSS changes are automatically reflected
- New CSS variables added to `TW_Chat_Style_Settings` must also be added to the `StyleCustomizer.jsx` section config

## Code Style Guidelines

### PHP
- Follow WordPress PHP Coding Standards
- Use PHPDoc comments for all classes, methods, and complex functions
- Prefix all classes with `TW_Chat_`
- Use prepared statements for all database queries
- Sanitize all user inputs and escape all outputs
- Use WordPress nonce verification for AJAX requests

### JavaScript/React
- **No inline CSS in JSX or PHP files** - All styles must be in external CSS files
- **No inline HTML in PHP files** - Use proper templating
- Use functional components and React hooks
- Consistent naming: camelCase for variables/functions, PascalCase for components
- Use `const` over `let` where possible
- Prefer arrow functions for callbacks

### CSS
- Use CSS custom properties (variables) with `--tw-` prefix for all customizable values
- Maintain consistent naming convention across text and voice widgets
- Mobile-first responsive design
- No hardcoded colors or dimensions - use variables

### File Organization
- PHP classes: `/includes/class-*.php`
- Admin classes: `/admin/class-*.php`
- React components: `/admin/app/src/`
- Widget code: `/widgets/[widget-type]/src/`
- Documentation: Root level `.md` files

## Database Schema

The plugin uses custom database tables:
- `{prefix}_tw_chat_message_logs`: Conversation history with token tracking
- `{prefix}_tw_chat_system_logs`: System events, errors, warnings
- Tables created/updated via `TW_Chat_DB` class on plugin activation

## Key Architecture Patterns

### Logging System
- **Message Logger** (`TW_Chat_Message_Logger`): Tracks all conversations
- **System Logger** (`TW_Chat_System_Logger`): Logs system events
- Tool calls logged in message history (type: 'tool')
- Tool responses logged in system logs
- Automatic cleanup via scheduled tasks (default: 30 days retention)

### Admin Interface
- React SPA with tab-based navigation
- AJAX endpoints for all data operations
- WordPress nonce security for all requests
- Transient caching (5-minute TTL) for dashboard stats

### Widget System
- Shortcode-based embedding: `[tw_chat_widget id=X]` and `[tw_voice_widget id=X]`
- Global widget option with per-page override
- CSS variables for complete customization
- Responsive design with mobile optimizations

## Testing Guidelines

### Before Committing
1. Test widget functionality (text and voice)
2. Verify admin interface operations (CRUD operations)
3. Check database logging is working
4. Ensure no PHP errors or JavaScript console errors
5. Test on different WordPress themes for style conflicts
6. Verify mobile responsiveness

### Security Checks
- All AJAX endpoints use nonce verification
- All database queries use prepared statements
- All user inputs are sanitized
- All outputs are escaped
- API keys stored securely in WordPress options

## Version Release Process

### Before Release
1. Update version number in main plugin file header
2. Update `CHANGELOG.md` with all changes in this version
3. Update `README.md` if new features require documentation
4. Test all functionality thoroughly
5. Verify database migrations work correctly
6. Build all frontend assets (admin app, chat widget, voice widget)

### Changelog Format
```markdown
## X.X.X
- **Category**: Description
  - Sub-item details
  - More details
```

Categories: Major Feature, Admin Interface, Bug fix, Feature, Performance, Developer, API Enhancement

## Smart Token Usage

### Efficient Code Reading
- Use `grep_search` to find specific code patterns before reading files
- Use `find_by_name` to locate files by name or extension
- Read only necessary line ranges with `offset` and `limit` parameters
- Use `code_search` for complex codebase exploration

### Batch Operations
- Call independent tools in parallel when possible
- Use `multi_edit` for multiple changes to the same file
- Group related file reads together

### Avoid Redundancy
- Don't re-read files unnecessarily - reference previous reads
- Don't repeat explanations - be concise and direct
- Use existing code patterns - don't reinvent solutions

## Common Tasks

### Adding a New Admin Feature
1. Create React component in `/admin/app/src/`
2. Add AJAX endpoint in `/admin/class-tw-chat-admin.php` or relevant admin class
3. Add styles to `/admin/app/src/Admin.css` (no inline CSS)
4. Update navigation in `Admin.jsx` if needed
5. Build admin app: `cd admin/app && npm run build`

### Adding a New Widget Feature
1. Update widget JavaScript in `/widgets/[type]/src/`
2. Add CSS variables and styles to widget CSS file
3. Update PHP shortcode handler if needed
4. Build widget: `cd widgets/[type] && npm run build`
5. Test across multiple themes

### Database Schema Changes
1. Update `TW_Chat_DB` class with new table structure
2. Increment database version constant
3. Test migration on fresh install and existing install
4. Document changes in `CHANGELOG.md`

## Security Considerations

- Never commit API keys or sensitive credentials
- Always use WordPress nonce verification for AJAX
- Sanitize all inputs: `sanitize_text_field()`, `sanitize_textarea_field()`, `absint()`
- Escape all outputs: `esc_html()`, `esc_attr()`, `esc_url()`
- Use prepared statements for all database queries
- Check user capabilities: `current_user_can('manage_options')`
- Validate and verify all file uploads
- Use HTTPS for all external API calls

## Open Source Best Practices

### Code Quality
- Write self-documenting code with clear variable names
- Add comments for complex logic, not obvious code
- Keep functions focused and single-purpose
- Avoid deep nesting - extract to separate functions
- Follow DRY (Don't Repeat Yourself) principle

### Documentation
- Keep `README.md` updated with user-facing features
- Keep `CHANGELOG.md` updated with every release
- Add PHPDoc comments to all public methods
- Document breaking changes clearly

### Git Workflow
- Write clear, descriptive commit messages
- Keep commits focused on single changes
- Don't commit built files unless necessary for distribution
- Use `.gitignore` for dependencies and build artifacts

### Collaboration
- Be responsive to issues and pull requests
- Provide clear reproduction steps for bugs
- Welcome contributions and provide feedback
- Maintain backward compatibility when possible

## Resources

- [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/)
- [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)
- [OpenAI PHP Client](https://github.com/openai-php/client)
- [RetellAI Documentation](https://docs.retellai.com/)
- [React Documentation](https://react.dev/)

## Contact & Support

- GitHub Repository: https://github.com/treyworks/treyworks-chat-plugin
- Website: https://treyworks.com/chat-plugin/
- Issues: Use GitHub Issues for bug reports and feature requests
