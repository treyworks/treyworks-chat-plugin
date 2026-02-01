# Version 2.2 - Database Logging System

## Overview
Version 2.2 will replace the current file-based logging system with a comprehensive database logging solution. This will provide better performance, easier querying, and improved data management for all plugin logging needs.

## Goals
- Replace file-based message logging with database storage
- Replace file-based system info and error logging with database storage
- Implement tool call logging with parameter tracking
- Support conversation tracking and analytics
- Enable efficient log querying and retention management

## Database Schema Design

### 1. Message Logs Table
Stores all chat messages exchanged between users and assistants.

**Fields:**
- `id` (primary key)
- `conversation_id` (string) - Unique identifier for conversation threads
- `widget_id` (int) - Reference to the chat widget
- `message_type` (enum: 'user', 'assistant', 'tool') - Type of message
- `message_text` (text) - The actual message content
- `input_tokens` (int) - Token count for input
- `output_tokens` (int) - Token count for output
- `created_at` (timestamp)

### 2. System Info & Error Logs Table
Stores system information and error messages.

**Fields:**
- `id` (primary key)
- `log_type` (enum: 'info', 'error', 'warning') - Type of log entry
- `message` (text) - Log message
- `context` (text/json) - Additional context data
- `widget_id` (int, nullable) - Associated widget if applicable
- `created_at` (timestamp)

### 3. Tool Call Logs Table
Stores tool/function calls made during conversations.

**Fields:**
- `id` (primary key)
- `conversation_id` (string) - Associated conversation
- `widget_id` (int) - Reference to the chat widget
- `tool_name` (string) - Name of the tool/function called
- `parameters` (text/json) - Tool call parameters
- `result` (text/json, nullable) - Tool call result
- `status` (enum: 'success', 'error') - Call status
- `created_at` (timestamp)

## Implementation Plan

### Phase 1: Review & Design
1. **Review current file-based logging implementation**
   - Audit existing message logging
   - Audit existing system info logging
   - Audit existing error logging
   - Identify all logging touchpoints in codebase

2. **Finalize database schema designs**
   - Message logging table structure
   - System info and error logging table structure
   - Tool call logging table structure
   - Add appropriate indexes for performance

### Phase 2: Database Setup
3. **Create database migration scripts**
   - Migration for message logs table
   - Migration for system/error logs table
   - Migration for tool call logs table
   - Rollback procedures

### Phase 3: Core Implementation
4. **Implement database logging classes**
   - Message logger class with CRUD operations
   - System/error logger class with CRUD operations
   - Tool call logger class with CRUD operations
   - Ensure proper error handling and fallbacks

5. **Update API endpoints**
   - Integrate message logging (conversation_id, widget_id, message_type, message_text, token_usage)
   - Integrate tool call logging with parameters
   - Update error handling to use database logging
   - Remove file-based logging calls

### Phase 4: Admin Interface
6. **Create admin interfaces**
   - Message logs viewer with filtering (by conversation, widget, date, type)
   - System info and error logs viewer
   - Tool call logs viewer with parameter display
   - Export functionality for all log types

### Phase 5: Maintenance & Cleanup
7. **Implement log retention system**
   - Configurable retention periods for each log type
   - Automated cleanup cron job
   - Archive functionality for old logs
   - Admin settings for retention configuration

8. **Documentation & Release**
   - Update CHANGELOG.md with version 2.2 features
   - Update plugin documentation
   - Migration guide from file-based to database logging
   - Performance optimization notes

## Benefits

### Performance
- Faster log queries using database indexes
- Reduced file I/O operations
- Better concurrent access handling

### Analytics
- Easy conversation tracking and analysis
- Token usage reporting and monitoring
- Tool usage statistics
- Error pattern identification

### Management
- Centralized log storage
- Automated retention policies
- Easy backup and restore
- Better scalability

## Technical Considerations

### Database Performance
- Add indexes on frequently queried fields (conversation_id, widget_id, created_at)
- Consider partitioning for large datasets
- Implement pagination for log viewers

### Data Privacy
- Ensure compliance with data retention policies
- Provide data export functionality
- Implement secure deletion methods

### Backward Compatibility
- Graceful migration from file-based logs
- Option to keep file-based logging as backup (configurable)
- Clear upgrade path for existing installations

### Phase 6: Message History Admin Page
9. **Create message history admin page**
   - Review existing admin app components and styles
   - Maximize code reuse from existing admin components
   - Display conversation history with filtering and search
   - Show full conversation threads grouped by conversation_id
   - Integrate with existing admin navigation and styling

### Phase 7: Reporting Dashboard
10. **Design and implement reporting dashboard**
   - Create dashboard page with time period selector (7, 14, 30 days)
   - Add database methods for aggregated usage statistics
   - Integrate charting library (e.g., Chart.js or Recharts)
   - Display key metrics:
     - Total conversations over time
     - Message volume (user vs assistant)
     - Token usage trends (input/output)
     - Widget usage breakdown
     - Tool call frequency
     - Error rates
   - Reuse existing admin components and styling
   - Add backend API endpoints for dashboard data
   - Integrate with admin navigation

## Success Criteria
- All file-based logging replaced with database logging
- Admin interfaces functional and user-friendly
- Log retention system working automatically
- No performance degradation in API endpoints
- Message history page integrated with existing admin UI
- Comprehensive documentation completed
