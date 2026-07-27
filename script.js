const bubble = document.getElementById('chat-bubble');
const panel = document.getElementById('chat-panel');
const closeBtn = document.getElementById('chat-close');
const messages = document.getElementById('chat-messages');
const input = document.getElementById('chat-input');
const sendBtn = document.getElementById('chat-send');

bubble.addEventListener('click', () => panel.classList.toggle('open'));
closeBtn.addEventListener('click', () => panel.classList.remove('open'));

const canned = [
  "Thanks for the details. One of our engineers will follow up shortly.",
  "Got it — I've logged this as a support request. Can you tell me a bit more?",
  "That sounds urgent. I'd recommend calling (555) 010-2200 for immediate help.",
  "Noted! In the meantime, is there anything else I can help with?"
];
let replyIndex = 0;

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'msg ' + sender;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';
  setTimeout(() => {
    addMessage(canned[replyIndex % canned.length], 'agent');
    replyIndex++;
  }, 600);
}

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});
