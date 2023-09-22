document.addEventListener("DOMContentLoaded", function () {
    const questionContainer = document.getElementById("question-container");
    const trueButton = document.getElementById("trueButton");
    const falseButton = document.getElementById("falseButton");
    const result = document.getElementById("result");
    const finalResult = document.getElementById("correct-answers")
    let correctAnswerCount = document.getElementById("correct-answer-count");

    let currentQuestion = null;
    let correctAnswers = 0;
    let totalQuestions = 0;

    // Fonction pour charger une nouvelle question
    function loadQuestion() {
        fetch("get_questions.php")
            .then((response) => response.json())
            .then((data) => {
                currentQuestion = data;

                // Vérifier si 10 questions ont été posées
                if (totalQuestions < 10) {
                    // Afficher la question dans le conteneur
                    questionContainer.textContent = currentQuestion.question_text;

                    // Incrémentez le nombre total de questions
                    totalQuestions++;
                } else {
                    // Si 10 questions ont été posées, afficher "Fin du quiz" et masquer les boutons
                    questionContainer.textContent = "Fin du quiz";
                    trueButton.style.display = "none"; // Masquer les boutons
                    falseButton.style.display = "none";

                    // Rendre visible le compteur de bonnes réponses
                    finalResult.style.display = "block";
                    correctAnswerCount.innerText = `Bonnes réponses : ${correctAnswers}`;
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

fetch("questions.php")
    .then(response => response.json())
    .then(questions => {
        displayQuestion(questions, currentQuestionIndex);
    });

const likeOptions = document.querySelectorAll('input[name="like-option"]');
const likeCounts = document.querySelectorAll('.like-count');

likeOptions.forEach((option, index) => {
    let previousOptionValue = null; // Pour stocker la valeur précédente sélectionnée

    option.addEventListener("change", () => {
        const selectedOptionValue = option.value;
        const likeCount = likeCounts[index];

        if (previousOptionValue === selectedOptionValue) {
            // Si l'option sélectionnée est la même que précédemment, désactivez-la
            option.checked = false;
            previousOptionValue = null;
        } else {
            // Désactivez tous les autres boutons "J'aime"
            likeOptions.forEach((otherOption, otherIndex) => {
                if (otherIndex !== index) {
                    otherOption.checked = false;
                }
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération de la question :", error);
            });
    }

    // Écoutez le clic sur les boutons Vrai et Faux
    trueButton.addEventListener("click", function () {
        if (currentQuestion && currentQuestion.answer === 1) {
            // Réponse correcte
            result.textContent = "Correct !";
            correctAnswers++;
            console.log(correctAnswerCount);
        } else {
            // Réponse incorrecte
            result.textContent = "Incorrect.";
        }

        // Charger la prochaine question
        loadQuestion();
    });

    falseButton.addEventListener("click", function () {
        if (currentQuestion && currentQuestion.answer === 0) {
            // Réponse correcte
            console.log("coucou");
            result.textContent = "Correct !";
            correctAnswers++;
        } else {
            // Réponse incorrecte
            result.textContent = "Incorrect.";
        }

        // Charger la prochaine question
        loadQuestion();
    });

    // Appelez loadQuestion() pour charger la première question lorsque la page est chargée
    loadQuestion();
});
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('yellow');
    }
  });
});

;
const questionTitle = document.querySelector(".header-page h2");
let totalQuestions = 0; 

function displayQuestion(questions, index) {
    const question = questions[`question${index + 1}`];
    if (question) {
        questionContainer.textContent = question.text;
        questionTitle.textContent = `Question ${index + 1}/${totalQuestions}`; 
    } 
}

fetch("questions.php")
    .then(response => response.json())
    .then(questions => {
        totalQuestions = Object.keys(questions).length;
        displayQuestion(questions, currentQuestionIndex);
    });


