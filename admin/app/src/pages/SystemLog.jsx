import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import LoadingIndicator from '../components/LoadingIndicator';

function SystemLog() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLog, setSelectedLog] = useState(null);
    const [filters, setFilters] = useState({
        log_type: ''
    });

    useEffect(() => {
        loadSystemLogs();
    }, []);

    const loadSystemLogs = async () => {
        setLoading(true);
        try {
            const response = await fetch(window.ajaxurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'get_system_logs',
                    nonce: window.twChatSettings?.nonce || '',
                    filters: JSON.stringify(filters)
                })
            });
            const data = await response.json();
            if (data.success) {
                setLogs(data.data);
            } else {
                toast.error('Failed to load system logs');
            }
        } catch (error) {
            toast.error('Error loading system logs');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const applyFilters = () => {
        loadSystemLogs();
    };

    const clearFilters = () => {
        setFilters({
            log_type: ''
        });
    };

    const openModal = (log) => {
        setSelectedLog(log);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedLog(null);
    };

    const abbreviateMessage = (message, maxLength = 100) => {
        if (!message) return '';
        if (message.length <= maxLength) return message;
        return message.substring(0, maxLength) + '...';
    };

    const clearAllLogs = async () => {
        if (!window.confirm('Are you sure you want to clear all system logs?')) {
            return;
        }

        try {
            const response = await fetch(window.ajaxurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'clear_system_logs',
                    nonce: window.twChatSettings?.nonce || ''
                })
            });
            const data = await response.json();
            if (data.success) {
                toast.success('System logs cleared');
                loadSystemLogs();
            } else {
                toast.error('Failed to clear system logs');
            }
        } catch (error) {
            toast.error('Error clearing system logs');
            console.error(error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    const getLogTypeClass = (type) => {
        switch(type) {
            case 'error': return 'tw-log-error';
            case 'warning': return 'tw-log-warning';
            case 'info': return 'tw-log-info';
            case 'debug': return 'tw-log-debug';
            default: return '';
        }
    };

    return (
        <div className="tw-system-log">
            <div className="postbox">
                <h2>System Logs</h2>
                <p>View system logs, errors, and warnings.</p>

                <div className="tw-filters-row">
                    <select
                        className="regular-text"
                        name="log_type"
                        value={filters.log_type}
                        onChange={handleFilterChange}
                    >
                        <option value="">All Log Types</option>
                        <option value="info">Info</option>
                        <option value="error">Error</option>
                        <option value="warning">Warning</option>
                        <option value="debug">Debug</option>
                    </select>
                    <button className="button button-primary" onClick={applyFilters}>
                        Apply
                    </button>
                    <button className="button" onClick={clearFilters}>
                        Clear
                    </button>
                    <button className="button" onClick={loadSystemLogs} disabled={loading}>
                        <span className="dashicons dashicons-update"></span> Refresh
                    </button>
                    <button className="button" onClick={clearAllLogs}>
                        Clear All Logs
                    </button>
                </div>
            </div>

            <div className="postbox">
                <h3>System Log Entries</h3>
                {loading && <LoadingIndicator />}
                {!loading && logs.length === 0 && (
                    <p>No system logs found.</p>
                )}
                {!loading && logs.length > 0 && (
                    <table className="wp-list-table widefat fixed striped">
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}>ID</th>
                                <th style={{ width: '100px' }}>Type</th>
                                <th>Message</th>
                                <th style={{ width: '180px' }}>Date</th>
                                <th style={{ width: '80px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log) => (
                                <tr key={log.id}>
                                    <td>{log.id}</td>
                                    <td>
                                        <span className={`tw-log-type-badge ${getLogTypeClass(log.log_type)}`}>
                                            {log.log_type}
                                        </span>
                                    </td>
                                    <td>{abbreviateMessage(log.message)}</td>
                                    <td>{formatDate(log.created_at)}</td>
                                    <td>
                                        <button
                                            className="button button-small"
                                            onClick={() => openModal(log)}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="System Log Details"
                className="tw-chat-admin-modal"
                overlayClassName="tw-chat-admin-overlay"
            >
                <h2 className="tw-chat-admin-modal-header">
                    System Log Details
                    <button onClick={closeModal}>
                        <span className="dashicons dashicons-no-alt"></span>
                    </button>
                </h2>
                <div className="tw-chat-admin-modal-content">
                    {selectedLog && (
                        <div className="tw-log-details">
                            <div className="tw-log-detail-row">
                                <strong>ID:</strong>
                                <span>{selectedLog.id}</span>
                            </div>
                            <div className="tw-log-detail-row">
                                <strong>Type:</strong>
                                <span className={`tw-log-type-badge ${getLogTypeClass(selectedLog.log_type)}`}>
                                    {selectedLog.log_type}
                                </span>
                            </div>
                            <div className="tw-log-detail-row">
                                <strong>Date:</strong>
                                <span>{formatDate(selectedLog.created_at)}</span>
                            </div>
                            {selectedLog.widget_id && (
                                <div className="tw-log-detail-row">
                                    <strong>Widget ID:</strong>
                                    <span>{selectedLog.widget_id}</span>
                                </div>
                            )}
                            <div className="tw-log-detail-row">
                                <strong>Message:</strong>
                                <div className="tw-log-message-full">
                                    {selectedLog.message}
                                </div>
                            </div>
                            {selectedLog.context && (
                                <div className="tw-log-detail-row">
                                    <strong>Context:</strong>
                                    <pre className="tw-log-context">
                                        {JSON.stringify(JSON.parse(selectedLog.context), null, 2)}
                                    </pre>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
}

export default SystemLog;
