CREATE DATABASE IF NOT EXISTS blood_donation;
USE blood_donation;

CREATE TABLE IF NOT EXISTS donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    peso DECIMAL(5,2) NOT NULL,
    ultima_doacao DATE NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    tipo_sanguineo VARCHAR(5) NOT NULL
);
