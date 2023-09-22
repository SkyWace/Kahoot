const questionContainer = document.getElementById("question-container");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const result = document.getElementById("result");

let currentQuestionIndex = 0;

function displayQuestion(questions, index) {
    const question = questions[`question${index + 1}`];
    if (question) {
        questionContainer.textContent = question.text;
    } else {
        questionContainer.textContent = "Fin du quiz.";
        trueButton.disabled = true;
        falseButton.disabled = true;
    }
}

trueButton.addEventListener("click", () => {
    fetch("questions.php")
        .then(response => response.json())
        .then(questions => {
            const question = questions[`question${currentQuestionIndex + 1}`];
            if (question) {
                if (question.answer === true) {
                    result.textContent = "Correct !";
                } else {
                    result.textContent = "Faux. La réponse était Faux.";
                }
                currentQuestionIndex++;
                displayQuestion(questions, currentQuestionIndex);
            }
        });
});

falseButton.addEventListener("click", () => {
    fetch("questions.php")
        .then(response => response.json())
        .then(questions => {
            const question = questions[`question${currentQuestionIndex + 1}`];
            if (question) {
                if (question.answer === false) {
                    result.textContent = "Correct !";
                } else {
                    result.textContent = "Faux. La réponse était Vrai.";
                }
                currentQuestionIndex++;
                displayQuestion(questions, currentQuestionIndex);
            }
        });
});

// Afficher la première question au chargement de la page
fetch("questions.php")
    .then(response => response.json())
    .then(questions => {
        displayQuestion(questions, currentQuestionIndex);
    });
