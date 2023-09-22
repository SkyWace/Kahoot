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
    <h1>Questions Vrai ou Faux</h1>
    <div id="question-container">
        <!-- La question sera affichée ici -->
    </div>
    <div id="button-container">
        <button id="trueButton">Vrai</button>
        <button id="falseButton">Faux</button>
    </div>
    <div id="result"></div>
    <a href="Quizuse/creer_quiz.php">Créer un Quizz</a>
    <!-- Options "J'aime" -->
    <div class="like-options">
    <form action="Note.php" method="post">
        <label>
            <input type="range" id="ratingSlider" name="note" min="1" max="5" step="1" value="1">
            <span class="like-label">Note :</span>
            <span class="like-count" id="ratingValue">1</span>
            <button type="submit">Enregistrer la note</button>
        </label>
    </form>
</div>



<!-- Compteur de bonnes réponses (initialement caché) -->
<div class="test" id="correct-answers">
    <p>Nombre de bonnes réponses : <span id="correct-answer-count">0</span></p>
</div>
</body>

</html>