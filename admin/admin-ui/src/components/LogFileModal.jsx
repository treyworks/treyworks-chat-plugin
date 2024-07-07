import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import { Tooltip } from 'react-tooltip';

import { logUrl, getLogFile, clearLogFile } from "../utils/logFileService";

function LogFileModal({ isOpen, onRequestClose }) {

    const [logData, setLogData] = useState('');

    useEffect(() => {
        if (isOpen) {
          handleRefresh();
        }
    }, [isOpen]);

    const handleRefresh = function() {
        getLogFile(successGetLog, errorGetLog);
    }

    const successGetLog = function(response) {
        setLogData(response.data);
    }

    const errorGetLog = function(response) {
        console.error('Error fetching log data:', response);
        toast.error('Error fetching log data.');
    }

    const handleClearLog = function() {
        console.log('Clearing');
        if (window.confirm("Are you sure you want to clear the log file?")) {
            clearLogFile(successClearingLog, errorClearingLog);
        }
    }

    const successClearingLog = function(response) {
        toast.success("Log file cleared");
        handleRefresh();
    }

    const errorClearingLog = function(response) {
        toast.error("Error clearing log file");
    }

    return (<>
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Log File Viewer"
            className="tw-chat-admin-modal"
            overlayClassName="tw-chat-admin-overlay"
        >
            <h2 className="tw-chat-admin-modal-header">
                Log File Viewer
                <button onClick={onRequestClose}><span className="dashicons dashicons-no-alt"></span></button>
            </h2>
            <div className="tw-chat-admin-modal-content">
                <p><strong>Location: </strong>
                    <a href={logUrl} 
                        download="treyworks-chat.log"
                        data-tooltip-id="download-tooltip"
                        data-tooltip-content="Click to download log file."
                        data-tooltip-place="top"
                    >{logUrl}</a>
                    <Tooltip id="download-tooltip" />
                </p>
                <p>
                    <a href="#" className="button button-primary" onClick={handleRefresh}>Refresh</a>&nbsp;
                    <a href="#" className="button button-secondary" onClick={handleClearLog}>Clear Log</a>
                </p>
                <pre dangerouslySetInnerHTML={{__html: logData}} />
            </div>
        </Modal>
    </>)
}


export default LogFileModal;