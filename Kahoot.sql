-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : ven. 22 sep. 2023 à 14:55
-- Version du serveur : 5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Kahoot`
--

-- --------------------------------------------------------

--
-- Structure de la table `new`
--

CREATE TABLE `new` (
  `question` text,
  `answer` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `new`
--

INSERT INTO `new` (`question`, `answer`) VALUES
(NULL, 'true'),
(NULL, 'true'),
(')bug)', 'true');

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `valeur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `notes`
--

INSERT INTO `notes` (`id`, `valeur`) VALUES
(1, 4),
(2, 5),
(3, 5),
(4, 2);

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question_text` text NOT NULL,
  `answer` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`id`, `question_text`, `answer`) VALUES
(1, 'La Lune tourne autour de la Terre.', 1),
(2, 'La Terre est plus grande que le Soleil.', 0),
(3, 'L\'eau bout à une température de 100 degrés Celsius à n\'importe quelle altitude.', 0),
(4, 'Le Python est un langage de programmation.', 1),
(5, 'La photosynthèse est le processus par lequel les plantes convertissent la lumière en énergie chimique.', 1),
(6, 'Le Soleil est principalement composé d\'hydrogène.', 1),
(7, 'La vitesse de la lumière est d\'environ 300 000 kilomètres par seconde.', 1),
(8, 'Les dauphins sont des poissons.', 0),
(9, 'Est-ce que un point peut casser une fenetre de la salle A113 de CESI ?', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
