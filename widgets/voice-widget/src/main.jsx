import VoiceWidget from './VoiceWidget';
import './index.css';

// Initialize Voice Widget
window.addEventListener('DOMContentLoaded', function() {
  const agentId = document.getElementById('tw-voice-widget').dataset.agentId;

  window.twVoiceWidget = new VoiceWidget(agentId);
  window.twVoiceWidget.init('tw-voice-widget');
});