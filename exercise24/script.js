// Exercise 24: Chat Interface
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    messages: [],       // Array of chat messages { sender, text, time }
    input: "",          // Current input value
    botTyping: false    // Simulate typing indicator
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// Helper: Generate timestamp
function getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");
    // Preserve focus/caret before re-render
    const activeEl = document.activeElement;
    const shouldRestore = activeEl && app.contains(activeEl) && activeEl.id;
    let restoreInfo = null;
    if (shouldRestore) {
        try {
            restoreInfo = {
                id: activeEl.id,
                type: activeEl.type,
                start: typeof activeEl.selectionStart === "number" ? activeEl.selectionStart : null,
                end: typeof activeEl.selectionEnd === "number" ? activeEl.selectionEnd : null,
            };
        } catch (_) {
            restoreInfo = { id: activeEl.id, type: activeEl.type, start: null, end: null };
        }
    }

    const chatMessages = state.messages
        .map(msg => `
            <div class="message ${msg.sender}">
                <div class="bubble">
                    <p>${msg.text}</p>
                    <span class="time">${msg.time}</span>
                </div>
            </div>
        `)
        .join("");

    const typingIndicator = state.botTyping
        ? `<div class="message bot typing"><div class="bubble"><p>Typing...</p></div></div>`
        : "";

    app.innerHTML = `
        <div class="chat-window">
            <div class="messages">${chatMessages}${typingIndicator}</div>
            <div class="input-area">
                <input 
                    type="text" 
                    id="chatInput" 
                    placeholder="Type a message..." 
                    value="${state.input}" 
                />
                <button id="sendBtn">Send</button>
            </div>
        </div>
    `;

    // Restore focus/caret after re-render
    if (restoreInfo) {
        const el = document.getElementById(restoreInfo.id);
        if (el) {
            el.focus();
            if (
                restoreInfo.type !== "checkbox" &&
                typeof restoreInfo.start === "number" &&
                typeof restoreInfo.end === "number" &&
                typeof el.setSelectionRange === "function"
            ) {
                try { el.setSelectionRange(restoreInfo.start, restoreInfo.end); } catch (_) {}
            }
        }
    }

    // Auto-scroll to bottom
    const messagesDiv = app.querySelector(".messages");
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // TODO 4: Add your event listeners and logic

    const inputEl = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");

    // Handle typing
    inputEl.addEventListener("input", (e) => {
        updateState({ input: e.target.value });
    });

    // Handle send (button click or Enter)
    function sendMessage() {
        const text = state.input.trim();
        if (!text) return;

        const newMsg = { sender: "user", text, time: getTime() };

        updateState({
            messages: [...state.messages, newMsg],
            input: ""
        });

        // Simulate bot reply after delay
        updateState({ botTyping: true });
        setTimeout(() => {
            const botReply = {
                sender: "bot",
                text: `You said: "${text}" 😊`,
                time: getTime()
            };
            updateState({
                messages: [...state.messages, botReply],
                botTyping: false
            });
        }, 1000);
    }

    sendBtn.addEventListener("click", sendMessage);
    inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendMessage();
    });
}

// TODO 5: Initial render
render();
