import React, { useEffect, useRef } from 'react'

const ChatContent = ({ html }) => {
    // Create a ref to reference the container element
    const contentRef = useRef(null)

    useEffect(() => {
        // Function to handle click events on links
        const handleClick = (event) => {
            // Check if the clicked element is a link with an href attribute
            if (event.target.tagName === 'A' && event.target.href) {
                event.preventDefault() // Prevent the default link click behavior
                window.open(event.target.href, '_blank') // Open the link in a new tab
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
    <span ref={contentRef} dangerouslySetInnerHTML={{ __html: html }} />
    )
}

export default ChatContent
