import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';

const WidgetsList = ({ widgets, onEdit, onRemove, onCopy }) => {
    return (
        <table className="wp-list-table widefat fixed striped posts">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Widget ID</th>
                    <th>Embed Code</th>
                    <th>OpenAI Assistant ID</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {widgets.map(widget => (
                    <tr key={widget.id}>
                        <td>
                            <a
                                href="#"
                                onClick={() => onEdit(widget)}
                            >
                                {widget.name}
                            </a>
                        </td>
                        <td>{widget.id}</td>
                        <td>
                            <a
                                href="#"
                                onClick={() => onCopy(`[tw_chat_widget id=${widget.id}]`)}
                                data-tooltip-id={`copy-widget-tooltip-${widget.id}`}
                                data-tooltip-content="Click to copy"
                                data-tooltip-place="top"
                            >
                                {`[tw_chat_widget id=${widget.id}]`}
                            </a>
                            <Tooltip id={`copy-widget-tooltip-${widget.id}`} />
                        </td>
                        <td>
                            <a
                                href="#"
                                onClick={() => onCopy(widget.meta.tw_chat_assistant_id)}
                                data-tooltip-id={`copy-assistant-tooltip-${widget.id}`}
                                data-tooltip-content="Click to copy"
                                data-tooltip-place="top"
                            >
                                {widget.meta.tw_chat_assistant_id}
                            </a>
                            <Tooltip id={`copy-assistant-tooltip-${widget.id}`} />
                        </td>
                        <td>
                            <a
                                href="#"
                                onClick={() => onRemove(widget.id)}
                                data-tooltip-id={`remove-tooltip-${widget.id}`}
                                data-tooltip-content="Remove Chat Widget"
                                data-tooltip-place="top"
                            >
                                <span className="dashicons dashicons-trash"></span>
                            </a>
                            <Tooltip id={`remove-tooltip-${widget.id}`} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

WidgetsList.propTypes = {
    widgets: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        meta: PropTypes.shape({
            tw_chat_assistant_id: PropTypes.string.isRequired
        }).isRequired
    })).isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onCopy: PropTypes.func.isRequired
};

export default WidgetsList;