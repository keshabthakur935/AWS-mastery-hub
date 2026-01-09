document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const submitQuizBtn = document.getElementById('submit-quiz');
    const quizResults = document.getElementById('quiz-results');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const individualResultsDiv = document.getElementById('individual-results');

    // This function will be called by each specific quiz page to load its questions
    window.loadQuiz = (quizTitle, questions) => {
        document.getElementById('quiz-title').textContent = `Quiz: ${quizTitle}`;
        totalQuestionsSpan.textContent = questions.length;

        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                <div class="options">
                    ${q.options.map((option, i) => `
                        <label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            `;
            quizForm.appendChild(questionDiv);
        });

        submitQuizBtn.addEventListener('click', () => {
            let score = 0;
            individualResultsDiv.innerHTML = '';

            questions.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                if (selectedOption) {
                    if (selectedOption.value === q.answer) {
                        score++;
                        resultItem.innerHTML = `<p class="correct-answer">${index + 1}. Correct! Your answer: ${selectedOption.value}</p>`;
                    } else {
                        resultItem.innerHTML = `<p class="wrong-answer">${index + 1}. Incorrect. Your answer: ${selectedOption.value}. Correct answer: ${q.answer}</p>`;
                    }
                } else {
                    resultItem.innerHTML = `<p class="wrong-answer">${index + 1}. Unanswered. Correct answer: ${q.answer}</p>`;
                }
                individualResultsDiv.appendChild(resultItem);
            });

            scoreSpan.textContent = score;
            quizResults.style.display = 'block';
            // Scroll to results
            quizResults.scrollIntoView({ behavior: 'smooth' });
        });
    };
});