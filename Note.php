<?php
// Assurez-vous d'avoir une connexion PDO à votre base de données
require_once("ConnexionBDD.php");

try{
// Assurez-vous que le formulaire a été soumis et que la variable "note" existe dans $_POST
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["note"])) {
    // Récupérez la note postée depuis le formulaire
    $valeur = $_POST["note"]; // Assurez-vous que "note" correspond à l'attribut "name" de votre élément de formulaire

    // Préparez la requête SQL pour l'insertion de la note dans la colonne "valeur"
    $sql = "INSERT INTO notes (valeur) VALUES (:valeur)";
    $stmt = $pdo->prepare($sql);

    // Liez la valeur de la note à la requête préparée
    $stmt->bindParam(':valeur', $valeur, PDO::PARAM_INT);

    // Exécutez la requête pour insérer la note dans la base de données
    if ($stmt->execute()) {
        echo "La note a été enregistrée avec succès.";
    } else {
        echo "Erreur lors de l'enregistrement de la note : " . $stmt->errorInfo()[2];
    }
} else {
    echo "Données de note non fournies ou formulaire non soumis.";
}
}catch (PDOException $e) {
    echo "Erreur PDO : " . $e->getMessage();
}
?>
