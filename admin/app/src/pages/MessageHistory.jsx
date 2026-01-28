import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { Tooltip } from 'react-tooltip';
import LoadingIndicator from '../components/LoadingIndicator';

function MessageHistory() {
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedConversationId, setSelectedConversationId] = useState(null);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [conversationToDelete, setConversationToDelete] = useState(null);
    const [filters, setFilters] = useState({
        date_from: '',
        date_to: ''
    });

    useEffect(() => {
        loadConversations();
    }, []);

    const loadConversations = async () => {
        setLoading(true);
        try {
            const response = await fetch(window.ajaxurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'get_conversations_list',
                    nonce: window.twChatSettings?.nonce || '',
                    ...filters
                })
            });
            const data = await response.json();
            if (data.success) {
                setConversations(data.data);
            } else {
                toast.error('Failed to load conversations');
            }
        } catch (error) {
            toast.error('Error loading conversations');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const loadConversationMessages = async (conversationId) => {
        setLoading(true);
        try {
            const response = await fetch(window.ajaxurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'get_conversation_messages',
                    nonce: window.twChatSettings?.nonce || '',
                    conversation_id: conversationId
                })
            });
            const data = await response.json();
            if (data.success) {
                setMessages(data.data);
                setSelectedConversationId(conversationId);
                setModalOpen(true);
            } else {
                toast.error('Failed to load messages');
            }
        } catch (error) {
            toast.error('Error loading messages');
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
        loadConversations();
    };

    const clearFilters = () => {
        setFilters({
            date_from: '',
            date_to: ''
        });
    };

    const closeModal = () => {
        setModalOpen(false);
        setMessages([]);
        setSelectedConversationId(null);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    const exportConversations = () => {
        const csvContent = [
            ['Conversation ID', 'Widget ID', 'Messages', 'Total Tokens', 'Last Message'].join(','),
            ...conversations.map(conv => [
                conv.conversation_id,
                conv.widget_id,
                conv.message_count,
                conv.total_tokens,
                formatDate(conv.last_message_date)
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `conversations_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('Conversations exported successfully');
    };

    const deleteConversation = async (conversationId) => {
        try {
            const response = await fetch(window.ajaxurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'delete_conversation',
                    nonce: window.twChatSettings?.nonce || '',
                    conversation_id: conversationId
                })
            });
            const data = await response.json();
            if (data.success) {
                toast.success('Conversation deleted successfully');
                loadConversations();
            } else {
                toast.error('Failed to delete conversation');
            }
        } catch (error) {
            toast.error('Error deleting conversation');
            console.error(error);
        }
    };

    const handleDeleteClick = (conversationId) => {
        setConversationToDelete(conversationId);
        setDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        if (conversationToDelete) {
            deleteConversation(conversationToDelete);
        }
        setDeleteConfirmOpen(false);
        setConversationToDelete(null);
    };

    const cancelDelete = () => {
        setDeleteConfirmOpen(false);
        setConversationToDelete(null);
    };

    const deleteAllConversations = async () => {
        try {
            const response = await fetch(window.ajaxurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'clear_message_logs',
                    nonce: window.twChatSettings?.nonce || ''
                })
            });
            const data = await response.json();
            if (data.success) {
                toast.success('All conversations deleted successfully');
                loadConversations();
            } else {
                toast.error('Failed to delete conversations');
            }
        } catch (error) {
            toast.error('Error deleting conversations');
            console.error(error);
        }
    };

    const getMessageTypeClass = (type) => {
        switch(type) {
            case 'user': return 'tw-message-user';
            case 'assistant': return 'tw-message-assistant';
            case 'tool': return 'tw-message-tool';
            case 'system': return 'tw-message-system';
            default: return '';
        }
    };

    return (
        <div className="tw-message-history">
            <div className="postbox">
                <h2>Message History</h2>
                <p>View conversation history and messages.</p>

                <div className="tw-filters-row">
                    <label>
                        <strong>From Date:</strong>
                        <input
                            type="date"
                            className="regular-text"
                            name="date_from"
                            value={filters.date_from}
                            onChange={handleFilterChange}
                        />
                    </label>
                    <label>
                        <strong>To Date:</strong>
                        <input
                            type="date"
                            className="regular-text"
                            name="date_to"
                            value={filters.date_to}
                            onChange={handleFilterChange}
                        />
                    </label>
                    <button className="button button-primary" onClick={applyFilters}>
                        Apply
                    </button>
                    <button className="button" onClick={clearFilters}>
                        Clear
                    </button>
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                        <button 
                            className="button"
                            onClick={exportConversations}
                            disabled={conversations.length === 0}
                        >
                            <span className="dashicons dashicons-download"></span> Export
                        </button>
                        <button 
                            className="button button-link-delete"
                            onClick={() => {
                                if (window.confirm('Are you sure you want to delete all conversations? This action cannot be undone.')) {
                                    deleteAllConversations();
                                }
                            }}
                            disabled={conversations.length === 0}
                        >
                            <span className="dashicons dashicons-trash"></span> Delete All
                        </button>
                    </div>
                </div>
            </div>

            <div className="postbox">
                <h3>Conversations</h3>
                {loading && <LoadingIndicator />}
                {!loading && conversations.length === 0 && (
                    <p>No conversations found.</p>
                )}
                {!loading && conversations.length > 0 && (
                    <table className="wp-list-table widefat fixed striped">
                        <thead>
                            <tr>
                                <th>Conversation ID</th>
                                <th>Widget ID</th>
                                <th>Messages</th>
                                <th>Total Tokens</th>
                                <th>Last Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conversations.map((conv) => (
                                <tr key={conv.conversation_id}>
                                    <td><code>{conv.conversation_id}</code></td>
                                    <td>{conv.widget_id}</td>
                                    <td>{conv.message_count}</td>
                                    <td>{conv.total_tokens}</td>
                                    <td>{formatDate(conv.last_message_date)}</td>
                                    <td>
                                        <button
                                            className="button button-small"
                                            onClick={() => loadConversationMessages(conv.conversation_id)}
                                            data-tooltip-id="view-tooltip"
                                            data-tooltip-content="View messages"
                                        >
                                            <span className="dashicons dashicons-visibility"></span>
                                        </button>
                                        <button
                                            className="button button-small button-link-delete"
                                            onClick={() => handleDeleteClick(conv.conversation_id)}
                                            data-tooltip-id="delete-tooltip"
                                            data-tooltip-content="Delete conversation"
                                            style={{ marginLeft: '4px' }}
                                        >
                                            <span className="dashicons dashicons-trash"></span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <Tooltip id="view-tooltip" />
                <Tooltip id="delete-tooltip" />
            </div>

            <Modal
                isOpen={deleteConfirmOpen}
                onRequestClose={cancelDelete}
                contentLabel="Confirm Delete"
                className="tw-chat-admin-modal tw-chat-admin-modal-small"
                overlayClassName="tw-chat-admin-overlay"
            >
                <h2 className="tw-chat-admin-modal-header">Confirm Delete
                    <button className="tw-modal-close" onClick={cancelDelete}>
                        <span className="dashicons dashicons-no-alt"></span>
                    </button>
                </h2>
                <div className="tw-chat-admin-modal-content">
                    <p>Are you sure you want to delete this conversation? This action cannot be undone.</p>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <button className="button" onClick={cancelDelete}>
                            Cancel
                        </button>
                        <button className="button button-primary button-link-delete" onClick={confirmDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Conversation Messages"
                className="tw-chat-admin-modal"
                overlayClassName="tw-chat-admin-overlay"
            >
                <h2 className="tw-chat-admin-modal-header">Conversation: {selectedConversationId}
                    <button className="tw-modal-close" onClick={closeModal}>
                        <span className="dashicons dashicons-no-alt"></span>
                    </button>
                </h2>
                <div className="tw-chat-admin-modal-content">
                    {loading && <LoadingIndicator />}
                    {!loading && messages.length === 0 && (
                        <p>No messages found.</p>
                    )}
                    {!loading && messages.length > 0 && (
                        <div className="tw-messages-container">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`tw-message ${getMessageTypeClass(msg.message_type)}`}>
                                    <div className="tw-message-header">
                                        <span className="tw-message-type">{msg.message_type}</span>
                                        <span className="tw-message-date">{formatDate(msg.created_at)}</span>
                                    </div>
                                    <div className="tw-message-content">
                                        {msg.message_text}
                                    </div>
                                    {(msg.input_tokens > 0 || msg.output_tokens > 0) && (
                                        <div className="tw-message-tokens">
                                            <span>Input: {msg.input_tokens}</span>
                                            <span>Output: {msg.output_tokens}</span>
                                        </div>
                                    )}
                                    {(msg.source_url || msg.ip_address) && (
                                        <div className="tw-message-meta">
                                            {msg.source_url && <span title="Source URL">🔗 {msg.source_url}</span>}
                                            {msg.ip_address && <span title="IP Address">📍 {msg.ip_address}</span>}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
}

export default MessageHistory;
