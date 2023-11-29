<?php
$servername = "127.0.0.1"; // Ou você pode usar "localhost"
$username = "root";
$password = ""; // A senha pode ser vazia se você não definiu uma
$dbname = "blood_donation";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Configuração do conjunto de caracteres para UTF-8
$conn->set_charset("utf8");
