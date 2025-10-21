-- Base de datos y tabla para English Academy
CREATE DATABASE IF NOT EXISTS `englishacademy` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `englishacademy`;

CREATE TABLE IF NOT EXISTS `messages` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `message` TEXT NOT NULL,
  `created_at` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
