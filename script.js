const questionContainer = document.getElementById("question-container");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const result = document.getElementById("result");

const questions = <?php echo json_encode($questions); ?>; // Récupérer les questions depuis PHP

let currentQuestionIndex = 0;

function displayQuestion(index) {
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
    const question = questions[`question${currentQuestionIndex + 1}`];
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
    const question = questions[`question${currentQuestionIndex + 1}`];
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
