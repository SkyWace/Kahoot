const questionContainer = document.getElementById("question-container");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const result = document.getElementById("result");

let currentQuestionIndex = 0;
let questions = [];

// Récupérer les questions depuis le serveur ou une source de données
fetch("questions.php")
    .then(response => response.json())
    .then(data => {
        questions = data;
        displayQuestion(currentQuestionIndex);
    });

function displayQuestion(index) {
    const question = questions[index];
    if (question) {
        questionContainer.textContent = question.text;
    } else {
        questionContainer.textContent = "Fin du quizz.";
        trueButton.disabled = true;
        falseButton.disabled = true;
    }
}

trueButton.addEventListener("click", () => {
    const question = questions[currentQuestionIndex];
    if (question) {
        if (question.answer === true) {
            result.textContent = "Correct !";
        } else {
            result.textContent = "Faux. La réponse était Faux.";
        }
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
});

falseButton.addEventListener("click", () => {
    const question = questions[currentQuestionIndex];
    if (question) {
        if (question.answer === false) {
            result.textContent = "Correct !";
        } else {
            result.textContent = "Faux. La réponse était Vrai.";
        }
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
});

// Afficher la première question au chargement de la page
displayQuestion(currentQuestionIndex);
