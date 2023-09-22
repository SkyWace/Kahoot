// Récupérer les éléments du DOM
const quizForm = document.getElementById("quiz-form");
const questionInput = document.getElementById("question");
const answerSelect = document.getElementById("answer");
const addQuestionButton = document.getElementById("add-question");
const questionList = document.getElementById("question-list");

// Tableau pour stocker les questions ajoutées par l'utilisateur
const userQuestions = [];

// Écouter le clic sur le bouton "Ajouter Question"
addQuestionButton.addEventListener("click", () => {
    // Récupérer la question et la réponse depuis les champs de formulaire
    const questionText = questionInput.value;
    const answerValue = answerSelect.value;
    
    // Vérifier que la question n'est pas vide
    if (questionText.trim() === "") {
        alert("Veuillez saisir une question.");
        return;
    }

    // Ajouter la question à la liste des questions de l'utilisateur
    const newQuestion = {
        text: questionText,
        answer: answerValue === "true" ? true : false
    };
    userQuestions.push(newQuestion);

    // Afficher la question dans la liste
    const questionItem = document.createElement("div");
    questionItem.textContent = newQuestion.text;
    questionList.appendChild(questionItem);

    // Réinitialiser le champ de la question
    questionInput.value = "";
    answerSelect.value = "true"; // Remettre la réponse par défaut
});

// Récupérer le bouton "Valider le Quizz"
const validateQuizButton = document.getElementById("validate-quiz");

// Écouter le clic sur le bouton "Valider le Quizz"
validateQuizButton.addEventListener("click", () => {
    // Vérifier si l'utilisateur a ajouté au moins une question
    if (userQuestions.length === 0) {
        alert("Ajoutez au moins une question avant de valider le quizz.");
        return;
    }

    // Enregistrez les questions dans une structure de données ou envoyez-les au serveur ici
    // Par exemple, vous pouvez les stocker dans une variable JavaScript ou les envoyer via une requête AJAX

    // Rediriger l'utilisateur vers la page pour jouer au quizz
    window.location.href = "jouer_quizz.php";
});
