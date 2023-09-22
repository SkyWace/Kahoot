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

// ...

// ...

// Compteurs "J'aime"
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
            });

            // Incrémentez le compteur de l'option sélectionnée
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
            previousOptionValue = selectedOptionValue;

            // Vous pouvez stocker les valeurs dans un tableau ou envoyer à un serveur, selon vos besoins
            // Par exemple, si vous souhaitez stocker les valeurs côté serveur en PHP :
            // const formData = new FormData();
            // formData.append("likeOption", selectedOptionValue);
            // fetch("enregistrer_like.php", {
            //     method: "POST",
            //     body: formData
            // });
        }
    });
});

// ...
