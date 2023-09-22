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
