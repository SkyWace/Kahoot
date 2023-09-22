<?php
session_start(); // Démarrez la session

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["add-question"])) {
    $questionText = $_POST["question"];
    $answer = $_POST["answer"];

    // Créez un tableau pour stocker les questions dans la session
    if (!isset($_SESSION["userQuestions"])) {
        $_SESSION["userQuestions"] = [];
    }

    // Ajoutez la nouvelle question à la session
    $_SESSION["userQuestions"][] = [
        "text" => $questionText,
        "answer" => $answer === "true"
    ];
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Créer un Quizz</title>
    <link rel="stylesheet" href="styles.css"> <!-- Assurez-vous d'inclure le fichier CSS approprié -->
</head>
<body>
    <h1>Créer un Quizz</h1>
    <form id="quiz-form" method="POST" action="creer_quizz.php">
        <label for="question">Question :</label>
        <input type="text" id="question" name="question" required>

        <label for="answer">Réponse :</label>
        <select id="answer" name="answer" required>
            <option value="true">Vrai</option>
            <option value="false">Faux</option>
        </select>

        <button type="submit" name="add-question">Ajouter Question</button>
    </form>
    <div id="question-list">
        <!-- Les questions ajoutées par l'utilisateur s'afficheront ici -->
        <h2>Questions ajoutées :</h2>
        <ul>
            <?php
            if (isset($_SESSION["userQuestions"])) {
                foreach ($_SESSION["userQuestions"] as $question) {
                    echo "<li>" . $question["text"] . " (Réponse : " . ($question["answer"] ? "Vrai" : "Faux") . ")</li>";
                }
            }
            ?>
        </ul>
    </div>
    <a href="jouer_quizz.php">Jouer au Quizz</a>
    <button type="button" id="validate-quiz">Valider le Quizz</button> <!-- Bouton pour valider le quizz -->

    <script src="script.js"></script>
</body>
</html>
