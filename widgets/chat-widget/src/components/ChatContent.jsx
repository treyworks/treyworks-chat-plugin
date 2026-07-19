import { useEffect, useRef } from 'react'

const allowedTags = new Set(['A', 'BR', 'CODE', 'EM', 'LI', 'OL', 'P', 'PRE', 'STRONG', 'UL'])

const sanitizeHtml = (html) => {
    const template = document.createElement('template')
    template.innerHTML = html

    template.content.querySelectorAll('*').forEach((element) => {
        if (!allowedTags.has(element.tagName)) {
            element.replaceWith(document.createTextNode(element.textContent || ''))
            return
        }

        Array.from(element.attributes).forEach((attribute) => {
            const isLinkAttribute = element.tagName === 'A' && ['href', 'title'].includes(attribute.name)
            const isCodeClass = element.tagName === 'CODE' && attribute.name === 'class'

            if (!isLinkAttribute && !isCodeClass) {
                element.removeAttribute(attribute.name)
            }
        })

        if (element.tagName === 'A' && element.hasAttribute('href')) {
            try {
                const url = new URL(element.getAttribute('href'), window.location.origin)
                if (!['http:', 'https:', 'mailto:'].includes(url.protocol)) {
                    element.removeAttribute('href')
                }
            } catch {
                element.removeAttribute('href')
            }

            element.setAttribute('target', '_blank')
            element.setAttribute('rel', 'noopener noreferrer')
        }
    })

    return template.innerHTML
}

const ChatContent = ({ html }) => {
    // Create a ref to reference the container element
    const contentRef = useRef(null)

    useEffect(() => {
        // Function to handle click events on links
        const handleClick = (event) => {
            // Check if the clicked element is a link with an href attribute
            if (event.target.tagName === 'A' && event.target.href) {
                event.preventDefault() // Prevent the default link click behavior
                window.open(event.target.href, '_blank', 'noopener,noreferrer') // Open the link in a new tab
            }
        }

        // Get the current container element
        const contentElement = contentRef.current
        if (contentElement) {
            // Attach the click event listener to the container element
            contentElement.addEventListener('click', handleClick)
        }

        // Cleanup function to remove the event listener
        return () => {
            if (contentElement) {
                contentElement.removeEventListener('click', handleClick)
            }
        }
    }, []) // Empty dependency array ensures this effect runs once on mount

    return (
    // Render the HTML content with dangerouslySetInnerHTML
    <span ref={contentRef} dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} />
    )
}

export default ChatContent
