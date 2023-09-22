const questionContainer = document.getElementById("question-container");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const result = document.getElementById("result");

let currentQuestionIndex = 0;
let questions;

// Afficher la première question au chargement de la page
fetch("questions.php")
    .then(response => response.json())
    .then(data => {
        questions = data;
        displayQuestion(questions, currentQuestionIndex);
    });



function displayQuestion(questions, index) {
    const question = questions[`question${index + 1}`];
    if (question) {
        questionContainer.textContent = question.text;
    } else {
        questionContainer.textContent = "Fin du quiz.";
        trueButton.disabled = true;
        falseButton.disabled = true;
        showCorrectAnswerCount();
    }
}

// ...

// Compteurs "J'aime"
const likeOptions = document.querySelectorAll('input[name="like-option"]');
const likeCounts = document.querySelectorAll('.like-count');

likeOptions.forEach((option, index) => {
    let previousOptionValue = null;

    option.addEventListener("change", () => {
        const selectedOptionValue = option.value;
        const likeCount = likeCounts[index];

        if (previousOptionValue === selectedOptionValue) {
            option.checked = false;
            previousOptionValue = null;
        } else {
            likeOptions.forEach((otherOption, otherIndex) => {
                if (otherIndex !== index) {
                    otherOption.checked = false;
                }
            });

            likeCount.textContent = parseInt(likeCount.textContent) + 1;
            previousOptionValue = selectedOptionValue;
        }
    });
});

// ...

let correctAnswers = 0;

trueButton.addEventListener("click", () => {
    const question = questions[`question${currentQuestionIndex + 1}`];
    if (question) {
        if (question.answer === true) {
            result.textContent = "Correct !";
            correctAnswers++;
        } else {
            result.textContent = "Faux. La réponse était Faux.";
        }
        currentQuestionIndex++;
        displayQuestion(questions, currentQuestionIndex);
    }
});

falseButton.addEventListener("click", () => {
    const question = questions[`question${currentQuestionIndex + 1}`];
    if (question) {
        if (question.answer === false) {
            result.textContent = "Correct !";
            correctAnswers++;
        } else {
            result.textContent = "Faux. La réponse était Vrai.";
        }
        currentQuestionIndex++;
        displayQuestion(questions, currentQuestionIndex);
    }
});

function showCorrectAnswerCount() {
    const correctAnswerCount = document.getElementById("correct-answer-count");
    correctAnswerCount.textContent = correctAnswers;

    const correctAnswersContainer = document.getElementById("correct-answers");
    correctAnswersContainer.style.display = "block";
}

// ...
