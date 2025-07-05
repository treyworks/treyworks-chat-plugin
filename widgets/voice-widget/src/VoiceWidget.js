import { RetellWebClient } from 'retell-client-js-sdk';

export default class VoiceWidget {
  constructor(agent_id) {
    this.client = new RetellWebClient();
    this.container = null;
    this.isCallActive = false;
    this.callStatus = 'Ready';
    this.isTalking = false;
    this.agentId = agent_id;
    
    // Bind methods to maintain 'this' context
    this.startCall = this.startCall.bind(this);
    this.stopCall = this.stopCall.bind(this);
    this.render = this.render.bind(this);
    this.setupEventListeners = this.setupEventListeners.bind(this);
    this.setIsCallActive = this.setIsCallActive.bind(this);
    this.updateCallStatus = this.updateCallStatus.bind(this);
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

  async startCall() {
    if (this.isCallActive) return;
    
    try {
      this.updateCallStatus('Connecting...');
      
      // Fetch the access token from your server
      const webCallResponse = await fetch(`${window.location.origin}/wp-json/tw-chat-assistant/v1/create-call`, {
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
            <span class="tw-voice-icon">${this.isCallActive ? '⏹' : '🎙'}</span>
          </button>
        </div>
      </div>
    `;
    
    // Set the HTML content
    this.container.innerHTML = widgetHTML;
    
    // Add event listeners to the button
    const callButton = this.container.querySelector('.tw-voice-button');
    if (callButton) {
      callButton.addEventListener('click', () => {
        if (this.isCallActive) {
          this.stopCall();
        } else {
          this.startCall();
        }
      });
    }
  }
}
