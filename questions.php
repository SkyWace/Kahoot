<?php
header("Access-Control-Allow-Origin: *"); // Autorise toutes les origines à accéder à ce fichier
$questions = [
    "question1" => [
        "text" => "La Terre est plate.",
        "answer" => false
    ],
    "question2" => [
        "text" => "Le soleil tourne autour de la Terre.",
        "answer" => false
    ],
    // Ajoutez d'autres questions ici
];

echo json_encode($questions);
?>
