// Exercise 20: Quiz App
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    currentQuestionIndex: 0,
    userAnswers: [],
    questions: [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: 3
        }
    ]       
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();  
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById('app');
    const currentQuestion = state.questions[state.currentQuestionIndex];

    app.innerHTML = `
        <div class="quiz-app">
            <div class="question-section">
                <h2>Question ${state.currentQuestionIndex + 1} of ${state.questions.length}</h2>
                <p>${currentQuestion.question}</p>
                <ul class="options-list">
                    ${currentQuestion.options.map((option, index) => `
                        <li>
                            <label>
                                <input type="radio" name="option" value="${index}" ${state.userAnswers[state.currentQuestionIndex] === index ? 'checked' : ''}/>
                                ${option}
                            </label>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="navigation-buttons">
                <button id="prevBtn" ${state.currentQuestionIndex === 0 ? 'disabled' : ''}>Previous</button>
                <button id="nextBtn"    ${state.currentQuestionIndex === state.questions.length - 1 ? 'disabled' : ''}>Next</button>        
                <button id="submitBtn" ${state.currentQuestionIndex === state.questions.length - 1 ? '' : 'style="display:none;"'}>Submit</button>
            </div>
            <div class="result-section" style="display: none;">
                <h2>Your Score: <span id="score"></span> / ${state.questions.length}</h2>
            </div>
        </div>
    `;
    
    // Event listeners
    const optionInputs = document.getElementsByName('option');
    optionInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const updatedAnswers = [...state.userAnswers];
            updatedAnswers[state.currentQuestionIndex] = parseInt(e.target.value);
            updateState({ userAnswers: updatedAnswers });
        });
    });
    const prevBtn = document.getElementById('prevBtn');
    prevBtn.addEventListener('click', () => {
        if (state.currentQuestionIndex > 0) {
            updateState({ currentQuestionIndex: state.currentQuestionIndex - 1 });
        }
    });

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.addEventListener('click', () => {
        if (state.currentQuestionIndex < state.questions.length - 1) {
            updateState({ currentQuestionIndex: state.currentQuestionIndex + 1 });
        }
    });

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', () => {
        let score = 0;
        state.userAnswers.forEach((answer, index) => {
            if (answer === state.questions[index].correctAnswer) {
                score++;
            }
        });
        document.getElementById('score').innerText = score;
        document.querySelector('.result-section').style.display = 'block';
    }); 

}


// TODO 5: Initial render
render();
