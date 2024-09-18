import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';

const AssistantsList = ({ assistants, onViewInstructions, onCopyId }) => (
    <table className="wp-list-table widefat fixed striped posts">
        <thead>
            <tr>
                <th>Assistant Name</th>
                <th>Assistant ID</th>     
                <th>Model</th>
            </tr>
        </thead>
        <tbody>
            {assistants.map(assistant => (
                <tr key={assistant.id}>
                    <td>
                        <a
                            href="#"
                            onClick={() => onViewInstructions(assistant)}
                        >
                            {assistant.name}
                        </a>
                    </td>
                    <td>
                        <a
                            href="#" 
                            onClick={() => onCopyId(assistant.id)}
                            data-tooltip-id={`copy-tooltip-${assistant.id}`}
                            data-tooltip-content="Click to copy"
                            data-tooltip-place="top"
                        >
                            {assistant.id}
                        </a>
                        <Tooltip id={`copy-tooltip-${assistant.id}`} />
                    </td>
                    <td>{assistant.model}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

AssistantsList.propTypes = {
    assistants: PropTypes.array.isRequired,
    onViewInstructions: PropTypes.func.isRequired,
    onCopyId: PropTypes.func.isRequired
};

export default AssistantsList;