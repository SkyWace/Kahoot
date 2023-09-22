<!DOCTYPE html>
<html lang="fr">

<?php
require_once("ConnexionBDD.php");
?>

<head>
    <meta charset="UTF-8">
    <title>Questions Vrai ou Faux</title>
    <link rel="stylesheet" href="styles.css"> <!-- Fichier de styles CSS (créez-le) -->
    <script src="script.js"></script>
</head>

<body>
    <h1 class="main-title">Squizzie</h1>
    <div class="layout">
        <div class="framed">
            <div class="header-page">
                <div id="question-container">
                    <!-- La question sera affichée ici -->
                </div>
                <div class="squizzie-button" id="button-container">
                    <button class="true" id="trueButton">Vrai</button>
                    <button class="false" id="falseButton">Faux</button>
                </div>
                <div class="answer-result">
                    <p class="result" id="result"></p>
                </div>

                <a href="Quizuse/creer_quiz.php">Créer un Quizz</a>

                <!-- Options "J'aime" -->
                <div class="like-options">
                    <label>
                        <input type="radio" name="like-option" value="1">
                        <span class="like-label">1 étoile</span>
                        <span class="like-count" data-count="0">0</span>
                    </label>
                    <label>
                        <input type="radio" name="like-option" value="2">
                        <span class="like-label">2 étoiles</span>
                        <span class="like-count" data-count="0">0</span>
                    </label>
                    <label>
                        <input type="radio" name="like-option" value="3">
                        <span class="like-label">3 étoiles</span>
                        <span class="like-count" data-count="0">0</span>
                    </label>
                    <label>
                        <input type="radio" name="like-option" value="4">
                        <span class="like-label">4 étoiles</span>
                        <span class="like-count" data-count="0">0</span>
                    </label>
                    <label>
                        <input type="radio" name="like-option" value="5">
                        <span class="like-label">5 étoiles</span>
                        <span class="like-count" data-count="0">0</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <!-- Compteur de bonnes réponses (initialement caché) -->
    <div class="test" id="correct-answers">
        <p>Nombre de bonnes réponses : <span id="correct-answer-count">0</span></p>
    </div>
</body>

</html>