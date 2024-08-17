import React from 'react';
import PropTypes from 'prop-types';

const AssistantModal = ({ assistant, onClose, getInstructions }) => (
    <>
        <h2 className="tw-chat-admin-modal-header">
            {assistant.name}
            <button onClick={onClose}><span className="dashicons dashicons-no-alt"></span></button>
        </h2>
        <div className="tw-chat-admin-modal-content">
            <p><strong>Assistant ID:</strong> {assistant.id}</p>
            <p><strong>Model:</strong> {assistant.model}</p>
            <div dangerouslySetInnerHTML={{__html: getInstructions()}} />
        </div>
    </>
);

AssistantModal.propTypes = {
    assistant: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    getInstructions: PropTypes.func.isRequired
};

export default AssistantModal;