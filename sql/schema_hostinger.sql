-- Esquema para Hostinger: importar dentro de la base de datos ya creada
-- NO incluir CREATE DATABASE ni USE (importar seleccionando la BDD en phpMyAdmin)

CREATE TABLE IF NOT EXISTS `messages` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `message` TEXT NOT NULL,
  `created_at` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
