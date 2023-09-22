<?php
// Informations de connexion à la base de données
$dsn = "mysql:host=localhost:8889;dbname=Kahoot";
$username = "root";
$password = "root";

try {
    // Connexion à la base de données
    $pdo = new PDO($dsn, $username, $password);

    // Configuration pour générer des exceptions en cas d'erreur
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Requête SQL pour récupérer une seule question aléatoire
    $sql = "SELECT question_text, answer FROM questions ORDER BY RAND() LIMIT 1";
    $stmt = $pdo->query($sql);

    // Récupérer les données de la question sous forme de tableau associatif
    $questionData = $stmt->fetch(PDO::FETCH_ASSOC);

    // Fermer la connexion à la base de données
    $pdo = null;

    // Renvoyer les données de la question au format JSON
    echo json_encode($questionData);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
?>
