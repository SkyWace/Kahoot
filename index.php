<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Questions Vrai ou Faux</title>
    <link rel="stylesheet" href="styles.css"> <!-- Fichier de styles CSS (créez-le) -->
    <a href="Quizuse/creer_quiz.php">Créer un Quizz</a>
</head>
<body>
    <h1>Questions Vrai ou Faux</h1>
    <div id="question-container">
        <!-- La question sera affichée ici -->
    </div>
    <div id="button-container">
        <button id="true-button">Vrai</button>
        <button id="false-button">Faux</button>
    </div>
    <div id="result"></div>

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

<!-- Compteur de bonnes réponses (initialement caché) -->
<div id="correct-answers" style="display: none;">
    <p>Nombre de bonnes réponses : <span id="correct-answer-count">0</span></p>
</div>

    <script src="script.js"></script>
</body>
</html>
