<?php
include 'db_connection.php';

function insertDonor($conn, $nome, $email, $idade, $peso, $ultima_doacao, $sexo, $tipo_sanguineo)
{
    $stmt = $conn->prepare("INSERT INTO donors (nome, email, idade, peso, ultima_doacao, sexo, tipo_sanguineo) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssidsss", $nome, $email, $idade, $peso, $ultima_doacao, $sexo, $tipo_sanguineo);

    if ($stmt->execute()) {
        return true; // Dados inseridos com sucesso
    } else {
        echo "Error: " . $stmt->error;
        return false; // Erro na inserção
    }
}
