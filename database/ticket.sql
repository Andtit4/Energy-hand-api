-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 01 fév. 2023 à 10:15
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ticket`
--

-- --------------------------------------------------------

--
-- Structure de la table `assignation`
--

CREATE TABLE `assignation` (
  `id_assign` int(6) NOT NULL,
  `date_assign` datetime DEFAULT NULL,
  `assign_to` varchar(255) DEFAULT NULL,
  `id_ticket` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `demande`
--

CREATE TABLE `demande` (
  `id_demande` int(11) NOT NULL,
  `type_demande` varchar(45) NOT NULL,
  `site` varchar(45) NOT NULL,
  `equipement` varchar(45) NOT NULL,
  `quantite` int(11) NOT NULL,
  `notified` int(11) NOT NULL DEFAULT 0,
  `email_user` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `demande`
--

INSERT INTO `demande` (`id_demande`, `type_demande`, `site`, `equipement`, `quantite`, `notified`, `email_user`) VALUES
(12, 'RAVITAILLEMENT', 'bagre', 'GE', 800, 0, 'user@user.tg');

-- --------------------------------------------------------

--
-- Structure de la table `noc`
--

CREATE TABLE `noc` (
  `id_noc` int(11) NOT NULL,
  `nom_noc` varchar(35) NOT NULL,
  `prenom_noc` varchar(50) NOT NULL,
  `email_noc` varchar(45) NOT NULL,
  `telephone_noc` varchar(45) NOT NULL,
  `password_noc` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `noc`
--

INSERT INTO `noc` (`id_noc`, `nom_noc`, `prenom_noc`, `email_noc`, `telephone_noc`, `password_noc`) VALUES
(1, 'Ali', 'Note', 'ali@gmail.com', '90101010', 'ali');

-- --------------------------------------------------------

--
-- Structure de la table `superviseur`
--

CREATE TABLE `superviseur` (
  `id_sup` int(11) NOT NULL,
  `nom_sup` varchar(25) NOT NULL,
  `prenom_sup` varchar(45) NOT NULL,
  `email_sup` varchar(35) NOT NULL,
  `password_sup` varchar(45) NOT NULL,
  `telephone_sup` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `superviseur`
--

INSERT INTO `superviseur` (`id_sup`, `nom_sup`, `prenom_sup`, `email_sup`, `password_sup`, `telephone_sup`) VALUES
(1, 'sup', 'sup', 'sup@sup.sup', 'sup', '90101010');

-- --------------------------------------------------------

--
-- Structure de la table `traiter`
--

CREATE TABLE `traiter` (
  `id_demande` int(11) NOT NULL,
  `email_user` varchar(45) NOT NULL,
  `equipement` varchar(45) NOT NULL,
  `site` varchar(45) NOT NULL,
  `type_demande` varchar(45) NOT NULL,
  `quantite` int(11) NOT NULL,
  `notified` int(11) NOT NULL DEFAULT 0,
  `showed` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `traiter`
--

INSERT INTO `traiter` (`id_demande`, `email_user`, `equipement`, `site`, `type_demande`, `quantite`, `notified`, `showed`) VALUES
(5, 'ali@gmail.com', 'NONPRECISE', 'test', 'HS', 0, 0, ''),
(6, 'user@user.tg', 'GE', 'op', 'RAVITAILLEMENT', 0, 1, 'true'),
(7, 'user@user.tg', 'GE', 'gjjjjj', 'RAVITAILLEMENT', 0, 1, 'true'),
(8, 'ali@gmail.com', 'NONPRECISE', 'dnlk', 'HS', 0, 1, ''),
(9, 'ali@gmail.com', 'NONPRECISE', 'lome', 'HS', 0, 1, ''),
(10, 'ali@gmail.com', 'NONPRECISE', 'kara', 'HS', 0, 1, ''),
(11, 'user@user.tg', 'GE', 'lolo', 'RAVITAILLEMENT', 40, 1, 'true'),
(13, 'user@user.tg', 'GE', 'baghan', 'RAVITAILLEMENT', 80, 1, 'true'),
(14, 'ali@gmail.com', 'NONPRECISE', 'kleme', 'HS', 0, 1, '');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nom_user` varchar(35) NOT NULL,
  `prenom_user` varchar(25) NOT NULL,
  `email_user` varchar(45) NOT NULL,
  `password_user` varchar(35) NOT NULL,
  `telephone_user` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `nom_user`, `prenom_user`, `email_user`, `password_user`, `telephone_user`) VALUES
(1, 'user', 'user', 'user@user.tg', 'user', '12345');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `assignation`
--
ALTER TABLE `assignation`
  ADD PRIMARY KEY (`id_assign`);

--
-- Index pour la table `demande`
--
ALTER TABLE `demande`
  ADD PRIMARY KEY (`id_demande`);

--
-- Index pour la table `noc`
--
ALTER TABLE `noc`
  ADD PRIMARY KEY (`id_noc`);

--
-- Index pour la table `superviseur`
--
ALTER TABLE `superviseur`
  ADD PRIMARY KEY (`id_sup`);

--
-- Index pour la table `traiter`
--
ALTER TABLE `traiter`
  ADD PRIMARY KEY (`id_demande`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `demande`
--
ALTER TABLE `demande`
  MODIFY `id_demande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `noc`
--
ALTER TABLE `noc`
  MODIFY `id_noc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `superviseur`
--
ALTER TABLE `superviseur`
  MODIFY `id_sup` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `traiter`
--
ALTER TABLE `traiter`
  MODIFY `id_demande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
