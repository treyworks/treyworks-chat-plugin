import React from "react";
import { useState } from "react";

function Tabs({ tabs }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  
    const changeTab = (index) => {
      setActiveTabIndex(index);
    };
  
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabs.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveTabIndex((prevIndex) => (prevIndex - 1 + tabs.length) % tabs.length);
      }
    };
  
    return (
    <>
        <div className="nav-tab-wrapper" role="tablist">
          {tabs.map((tab, index) => (
            <button
                key={index}
                className={activeTabIndex === index ? "nav-tab nav-tab-active" : "nav-tab"}
                role="tab"
                aria-selected={activeTabIndex === index}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                tabIndex={activeTabIndex === index ? 0 : -1}
                onClick={() => changeTab(index)}
                onKeyDown={onKeyDown}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {tabs.map((tab, index) => {
          const ContentComponent = tab.content; // Assigning the content to a variable for clarity
          return (
            <div
              key={index}
              className="tabs-content"
              role="tabpanel"
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              hidden={activeTabIndex !== index}
              tabIndex={0} // Allows the div to be focusable
            >
              <ContentComponent /> {/* Rendering the component */}
            </div>
          );
        })}
    </>
    );
  };

  export default Tabs;