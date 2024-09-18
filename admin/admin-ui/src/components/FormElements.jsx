import React from 'react';

export function renderFormField(label, name, type, formData, handleInputChange) {
    return (
        <tr>
            <th scope="row">{label}</th>
            <td>
                {type === 'textarea' ? (
                    <textarea
                        className="regular-text"
                        name={name}
                        rows="5"
                        onChange={handleInputChange}
                        value={formData[name]}
                    />
                ) : (
                    <input
                        className="regular-text"
                        type={type}
                        name={name}
                        onChange={handleInputChange}
                        value={formData[name]}
                    />
                )}
            </td>
        </tr>
    );
}

export function renderCheckboxField(label, name, formData, handleCheckboxChange) {
    return (
        <tr>
            <th scope="row">{label}</th>
            <td>
                <input 
                    type="checkbox" 
                    id={name} 
                    name={name} 
                    checked={formData[name] === "enabled"}
                    onChange={handleCheckboxChange}
                /> 
                <label htmlFor={name}>Yes, {label.toLowerCase()}.</label>
            </td>
        </tr>
    );
}

export function renderSelectField(label, name, options, formData, handleInputChange) {
    return (
        <tr>
            <th scope="row">{label}</th>
            <td>
                <select 
                    name={name} 
                    onChange={handleInputChange} 
                    value={formData[name]}
                >
                    <option value="">Select a chat widget</option>
                    {options.map(widget => (
                        <option key={widget.id} value={widget.id}>{widget.name}</option>
                    ))}
                </select>   
            </td>
        </tr>
    );
}