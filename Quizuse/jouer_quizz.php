<?php
session_start(); // Démarrez la session
$questions = [];

// Vérifiez si des questions sont enregistrées dans la session
if (isset($_SESSION["userQuestions"])) {
    $questions = $_SESSION["userQuestions"];
}

// Convertissez les questions en format JSON pour l'utilisation côté client
$questionsJson = json_encode($questions);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Jouer au Quizz</title>
    <link rel="stylesheet" href="styles.css"> <!-- Assurez-vous d'inclure le fichier CSS approprié -->
</head>
<body>
    <h1>Jouer au Quizz</h1>
    <div id="question-container">
        <!-- La question sera affichée ici -->
    </div>
    <div id="button-container">
        <button id="true-button">Vrai</button>
        <button id="false-button">Faux</button>
    </div>
    <div id="result"></div>

    <script>
        // Utilisez la variable JavaScript contenant les questions JSON
        const questions = <?php echo $questionsJson; ?>;

        // Le reste du code JavaScript pour jouer au quizz...
        // (Utilisez le code précédent pour gérer l'affichage et la réponse des questions)
    </script>

    <script src="jouer_quizz.js"></script> <!-- Inclure le fichier JavaScript pour jouer au quizz -->
</body>
</html>