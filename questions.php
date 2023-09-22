<?php
$questions = [
    "question1" => [
        "text" => "La Lune tourne autour de la Terre.",
        "answer" => true
    ],
    "question2" => [
        "text" => "La Terre est plus grande que le Soleil.",
        "answer" => false
    ],
    "question3" => [
        "text" => "L'eau bout à une température de 100 degrés Celsius à n'importe quelle altitude.",
        "answer" => false
    ],
    "question4" => [
        "text" => "Le Python est un langage de programmation.",
        "answer" => true
    ],
    "question5" => [
        "text" => "La photosynthèse est le processus par lequel les plantes convertissent la lumière en énergie chimique.",
        "answer" => true
    ],
    "question6" => [
        "text" => "Le Soleil est principalement composé d'hydrogène.",
        "answer" => true
    ],
    "question7" => [
        "text" => "La vitesse de la lumière est d'environ 300 000 kilomètres par seconde.",
        "answer" => true
    ],
    "question8" => [
        "text" => "Les dauphins sont des poissons.",
        "answer" => false
    ],
    "question9" => [
        "text" => "La Guerre de Sécession a eu lieu au 18e siècle.",
        "answer" => false
    ],
    "question10" => [
        "text" => "La Grande Muraille de Chine est visible depuis l'espace.",
        "answer" => true
    ],
    "question11" => [
        "text" => "Un point peut casser une fenetre de la salle A113 de CESI.",
        "answer" => true
    ],
    "question12" => [
        "text" => "Simons va réussir à créer la BDD.",
        "answer" => false
    ]
];

echo json_encode($questions);
?>