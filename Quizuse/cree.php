<?php
require_once("../ConnexionBDD.php");
try {
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["add-question"])) {
        $questionText = $_POST["question"];
        $answer = $_POST["answer"];

        $sql = "INSERT INTO new (question, answer) VALUES (:question, :answer)";
        $stmt = $pdo->prepare($sql);

        // Liez la valeur de la question et de la réponse à la requête préparée
        $stmt->bindParam(':question', $questionText, PDO::PARAM_STR);
        $stmt->bindParam(':answer', $answer, PDO::PARAM_STR);

        // Exécutez la requête pour insérer la question et la réponse dans la base de données
        if ($stmt->execute()) {
            echo "La question et la réponse ont été enregistrées avec succès.";
        } else {
            echo "Erreur lors de l'enregistrement de la question et de la réponse : " . $stmt->errorInfo()[2];
        }
    } else {
        echo "Données de question et réponse non fournies ou formulaire non soumis.";
    }
} catch (PDOException $e) {
    echo "Erreur PDO : " . $e->getMessage();
}
?>
