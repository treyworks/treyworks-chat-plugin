import { RetellWebClient } from 'retell-client-js-sdk';

export default class VoiceWidget {
  constructor(agent_id) {
    this.client = new RetellWebClient();
    this.container = null;
    this.isCallActive = false;
    this.callStatus = 'Ready';
    this.isTalking = false;
    this.agentId = agent_id;
    this.showConfirmDialog = false;
    this.iconImage = (typeof twVoicePluginSettings !== 'undefined' && twVoicePluginSettings.tw_voice_button_icon_image) || '';
    
    // Bind methods to maintain 'this' context
    this.startCall = this.startCall.bind(this);
    this.stopCall = this.stopCall.bind(this);
    this.render = this.render.bind(this);
    this.setupEventListeners = this.setupEventListeners.bind(this);
    this.setIsCallActive = this.setIsCallActive.bind(this);
    this.updateCallStatus = this.updateCallStatus.bind(this);
    this.showConfirmation = this.showConfirmation.bind(this);
    this.hideConfirmation = this.hideConfirmation.bind(this);
    this.confirmStartCall = this.confirmStartCall.bind(this);
  }

  // Initialize the widget with the container element
  init(containerId = 'tw-voice-widget') {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Container with ID "${containerId}" not found.`);
      return;
    }
    
    this.setupEventListeners();
    this.render();
  }

  // Set up event listeners for the Retell client
  setupEventListeners() {
    this.client.on("call_started", () => {
      console.log("call started");
      this.setIsCallActive(true);
      this.updateCallStatus('Call in progress');
    });

    this.client.on("call_ended", () => {
      console.log("call ended");
      this.setIsCallActive(false);
      this.updateCallStatus('Call ended');
    });

    this.client.on("error", (error) => {
      console.error("An error occurred:", error);
      this.updateCallStatus('Error: ' + error.message);
      // Stop the call
      this.client.stopCall();
      this.setIsCallActive(false);
    });
  }

  // Update the call active state
  setIsCallActive(isActive) {
    this.isCallActive = isActive;
    this.render();
  }

  // Update the call status message
  updateCallStatus(status) {
    this.callStatus = status;
    const statusElement = this.container.querySelector('.tw-voice-status');
    if (statusElement) {
      statusElement.textContent = status;
    }
  }

  // Update the talking animation
  updateTalkingAnimation(isTalking) {
    const callButton = this.container.querySelector('.tw-voice-button');
    if (callButton) {
      if (isTalking) {
        callButton.classList.add('talking');
      } else {
        callButton.classList.remove('talking');
      }
    }
  }

  showConfirmation() {
    this.showConfirmDialog = true;
    this.render();
  }

  hideConfirmation() {
    this.showConfirmDialog = false;
    this.render();
  }

  async confirmStartCall() {
    this.hideConfirmation();
    await this.startCall();
  }

  async startCall() {
    if (this.isCallActive) return;
    
    try {
      this.updateCallStatus('Connecting...');
      
      // Fetch the access token from your server
      const webCallResponse = await fetch(`${window.location.origin}/wp-json/tw-chat/v1/create-call`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'agent_id': this.agentId
        }),
      }).then(res => res.json());

      // Handle the response
      console.log(webCallResponse);
      if (!webCallResponse || !webCallResponse.access_token) {
        throw new Error('Failed to fetch access token');
      }
      
      const accessToken = webCallResponse.access_token;
      await this.client.startCall({ accessToken: accessToken });
    } catch (error) {
      console.error('Error starting call:', error);
      this.updateCallStatus('Failed to start call');
    }
  }

  stopCall() {
    if (!this.isCallActive) return;
    
    try {
      this.client.stopCall();
      this.updateCallStatus('Ending call...');
      // Reset call status to 'Ready' after 1 second
      setTimeout(() => {
        this.updateCallStatus('Ready');
      }, 1000);
      
    } catch (error) {
      console.error('Error stopping call:', error);
    }
  }

  // Render the widget UI
  render() {
    if (!this.container) return;
    
    // Create the widget HTML
    const widgetHTML = `
      <div class="tw-voice-container">
        <div class="tw-voice-status-container">
          <p class="tw-voice-status">${this.callStatus}</p>
        </div>
        <div class="tw-voice-button-container">
          <button class="tw-voice-button ${this.isCallActive ? 'active' : ''}" aria-label="${this.isCallActive ? 'End Call' : 'Start Call'}">
            ${this.iconImage
              ? `<img class="tw-voice-icon-image" src="${this.iconImage}" alt="${this.isCallActive ? 'End Call' : 'Start Call'}" />`
              : `<span class="tw-voice-icon">${this.isCallActive ? '⏹' : '🎙'}</span>`
            }
          </button>
        </div>
      </div>
      <div class="tw-voice-dialog-overlay ${this.showConfirmDialog ? '' : 'hidden'}">
        <div class="tw-voice-dialog" role="dialog" aria-labelledby="tw-voice-dialog-title" aria-describedby="tw-voice-dialog-text">
          <h2 class="tw-voice-dialog-title" id="tw-voice-dialog-title">Start Voice Call?</h2>
          <p class="tw-voice-dialog-text" id="tw-voice-dialog-text">This will initiate a voice call using your microphone and speakers. Make sure you're in a suitable environment for a voice conversation.</p>
          <div class="tw-voice-dialog-buttons">
            <button class="tw-voice-dialog-button tw-voice-dialog-button-cancel" aria-label="Cancel">Cancel</button>
            <button class="tw-voice-dialog-button tw-voice-dialog-button-confirm" aria-label="Start Call">Start Call</button>
          </div>
        </div>
      </div>
    `;
    
    // Set the HTML content
    this.container.innerHTML = widgetHTML;
    
    // Add event listeners to the call button
    const callButton = this.container.querySelector('.tw-voice-button');
    if (callButton) {
      callButton.addEventListener('click', () => {
        if (this.isCallActive) {
          this.stopCall();
        } else {
          this.showConfirmation();
        }
      });
    }
    
    // Add event listeners to dialog buttons
    const confirmButton = this.container.querySelector('.tw-voice-dialog-button-confirm');
    const cancelButton = this.container.querySelector('.tw-voice-dialog-button-cancel');
    
    if (confirmButton) {
      confirmButton.addEventListener('click', () => {
        this.confirmStartCall();
      });
    }
    
    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        this.hideConfirmation();
      });
    }
    
    // Close dialog when clicking overlay
    const dialogOverlay = this.container.querySelector('.tw-voice-dialog-overlay');
    if (dialogOverlay) {
      dialogOverlay.addEventListener('click', (e) => {
        if (e.target === dialogOverlay) {
          this.hideConfirmation();
        }
      });
    }
  }
}
