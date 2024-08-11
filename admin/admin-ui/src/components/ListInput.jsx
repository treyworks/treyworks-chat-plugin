import React, { useState, useEffect } from 'react';

const ListInput = ({ onChange, defaultValues = '', maxItems = 99 }) => {
  const [items, setItems] = useState(['']);
  const [isMaxReached, setIsMaxReached] = useState(false);

  useEffect(() => {
    if (defaultValues) {
      const initialItems = defaultValues.split(',').map(item => item.trim()).filter(item => item !== '');
      const limitedItems = initialItems.slice(0, maxItems);
      setItems(limitedItems.length > 0 ? limitedItems : ['']);
      onChange(limitedItems);
      setIsMaxReached(limitedItems.length >= maxItems);
    }
  }, [defaultValues, onChange, maxItems]);

  const handleChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
    onChange(newItems.filter(item => item.trim() !== ''));
  };

  const addItem = (event) => {
    event.preventDefault();
    if (items.length < maxItems) {
      setItems([...items, '']);
      setIsMaxReached(items.length + 1 >= maxItems);
    }
  };

  const removeItem = (event, index) => {
    event.preventDefault();
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems.length > 0 ? newItems : ['']);
    onChange(newItems.filter(item => item.trim() !== ''));
    setIsMaxReached(newItems.length >= maxItems);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (index === items.length - 1 && !isMaxReached) {
        addItem(event);
      }
    }
  };

  return (
    <div className="tw-chat-list-input">
      {items.map((item, index) => (
        <div key={index}>
          <input
            className="regular-text"
            type="text"
            value={item}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            placeholder="Enter a value"
          />
          <button 
            onClick={(event) => removeItem(event, index)}  
            aria-label="Remove Suggested Answer"
          >
            <span className="dashicons dashicons-no" />
          </button>
        </div>
      ))}
      {!isMaxReached && (
      <button 
        onClick={addItem} 
        aria-label="Add Suggested Answer"
      >
        <span className="dashicons dashicons-plus" /> Add Item
      </button>
      )}
      {isMaxReached && (
        <p>
          Maximum of {maxItems} items reached.
        </p>
      )}
    </div>
  );
};

export default ListInput;
