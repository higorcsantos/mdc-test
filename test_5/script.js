document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');
    quizForm.addEventListener('submit', submitQuiz);

    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', function () {
        resetQuiz();
    });
    resetQuiz();
});

function resetQuiz() {
    const form = document.getElementById('quiz-form');
    const radioOptions = form.querySelectorAll('input[type="radio"]');
    radioOptions.forEach(option => {
        option.disabled = false; 
        option.checked = false; 
    });

    const questionItems = form.querySelectorAll('li');
    questionItems.forEach(item => {
        item.classList.remove('correct-answer', 'incorrect-answer'); 
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; 
}

function submitQuiz(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const answers = Array.from(formData.values());
    const correctAnswers = ['a', 'b', 'b', 'c', 'c', 'b', 'b', 'c', 'b', 'b'];

    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        const questionItem = form.querySelectorAll(`li:nth-child(${i + 1})`);
        const radioOptions = questionItem[0].querySelectorAll('input[type="radio"]');
        radioOptions.forEach(option => {
            option.disabled = true; 
        });

        if (answers[i] === correctAnswers[i]) {
            score++;
            questionItem[0].classList.add('correct-answer');
        } else {
            questionItem[0].classList.add('incorrect-answer');
        }
    }
    

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You scored ${score} out of ${correctAnswers.length}.`;
    return false;
}
