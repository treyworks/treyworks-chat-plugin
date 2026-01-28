import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import LoadingIndicator from '../components/LoadingIndicator';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ReportingDashboard() {
    const [loading, setLoading] = useState(false);
    const [timePeriod, setTimePeriod] = useState(7);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        loadDashboardData();
    }, [timePeriod]);

    const loadDashboardData = async () => {
        setLoading(true);
        try {
            const response = await fetch(window.ajaxurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'get_dashboard_stats',
                    nonce: window.twChatSettings?.nonce || '',
                    days: timePeriod
                })
            });
            const data = await response.json();
            if (data.success) {
                setStats(data.data);
            } else {
                toast.error('Failed to load dashboard data');
            }
        } catch (error) {
            toast.error('Error loading dashboard data');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const formatNumber = (num) => {
        return new Intl.NumberFormat().format(num || 0);
    };

    if (loading && !stats) {
        return <LoadingIndicator />;
    }

    if (!stats) {
        return <div className="postbox"><p>No data available</p></div>;
    }

    const widgetData = (stats.widget_usage || []).map(widget => ({
        name: widget.widget_title || `Widget ${widget.widget_id}`,
        conversations: parseInt(widget.conversations),
        messages: parseInt(widget.messages)
    }));

    // Check if there are no widgets
    const hasWidgets = widgetData.length > 0;
    
    // Check if there are no conversations or messages
    const hasData = stats.total_conversations > 0 || Object.values(stats.message_types || {}).reduce((a, b) => a + b, 0) > 0;

    return (
        <div className="tw-welcome-dashboard">
            <section>
                <div className="tw-dashboard-header">
                    <div>
                        <h2>Reporting Dashboard</h2>
                        <p>View key metrics and trends for your Treyworks Chat implementation.</p>
                    </div>
                    <div className="tw-time-period-selector">
                        <button 
                            className={`button ${timePeriod === 7 ? 'button-primary' : ''}`}
                            onClick={() => setTimePeriod(7)}
                        >
                            7 Days
                        </button>
                        <button 
                            className={`button ${timePeriod === 14 ? 'button-primary' : ''}`}
                            onClick={() => setTimePeriod(14)}
                        >
                            14 Days
                        </button>
                        <button 
                            className={`button ${timePeriod === 30 ? 'button-primary' : ''}`}
                            onClick={() => setTimePeriod(30)}
                        >
                            30 Days
                        </button>
                    </div>
                </div>
            </section>
            {!hasWidgets ? (
                <div className="postbox">
                    <div className="tw-empty-state">
                        <h3>No Chat Widgets Found</h3>
                        <p>Get started by creating your first chat widget in the Chat Widgets tab.</p>
                        <p>Once you create a widget and start receiving messages, your analytics will appear here.</p>
                    </div>
                </div>
            ) : !hasData ? (
                <div className="postbox">
                    <div className="tw-empty-state">
                        <h3>No Data Available</h3>
                        <p>No conversations or messages have been recorded in the selected time period.</p>
                        <p>Once users start interacting with your chat widgets, analytics will appear here.</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="tw-quick-stats">
                        <div className="tw-stat-item">
                            <span className="tw-stat-number">{formatNumber(stats.total_conversations)}</span>
                            <span className="tw-stat-label">Conversations</span>
                        </div>
                        <div className="tw-stat-item">
                            <span className="tw-stat-number">
                                {formatNumber(stats.message_types?.user || 0)}
                            </span>
                            <span className="tw-stat-label">User Messages</span>
                        </div>
                        <div className="tw-stat-item">
                            <span className="tw-stat-number">
                                {formatNumber((stats.total_input_tokens || 0) + (stats.total_output_tokens || 0))}
                            </span>
                            <span className="tw-stat-label">Total Tokens</span>
                        </div>
                    </div>

                    <div className="postbox">
                        <div className="tw-section-header">
                            <h3>Recent Activity</h3>
                        </div>

                        <div className="tw-chart-simple">
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={stats.daily_trends || []}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                    <XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
                                    <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                                    <Tooltip />
                                    <Legend />
                                    <Line 
                                        type="monotone" 
                                        dataKey="conversations" 
                                        stroke="#042236" 
                                        strokeWidth={2}
                                        name="Conversations" 
                                        dot={{ fill: '#042236', r: 3 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {widgetData.length > 0 && (
                        <div className="postbox">
                            <h3>Widget Performance</h3>
                            <div className="tw-chart-simple">
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={widgetData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                        <XAxis dataKey="name" stroke="#666" style={{ fontSize: '12px' }} />
                                        <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="conversations" fill="#042236" name="Conversations" />
                                        <Bar dataKey="messages" fill="#275c4d" name="Messages" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default ReportingDashboard;
