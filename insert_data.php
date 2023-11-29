<?php
include 'function.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se todas as variáveis necessárias foram recebidas
    if (
        isset($_POST["nome"]) && isset($_POST["email"]) && isset($_POST["idade"]) &&
        isset($_POST["peso"]) && isset($_POST["ultima_doacao"]) && isset($_POST["sexo"]) &&
        isset($_POST["tipo_sanguineo"])
    ) {
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $idade = $_POST["idade"];
        $peso = $_POST["peso"];
        $ultima_doacao = $_POST["ultima_doacao"];
        $sexo = $_POST["sexo"];
        $tipo_sanguineo = $_POST["tipo_sanguineo"];

        // Verifica se os dados são válidos (adicione mais verificações conforme necessário)
        if (
            !empty($nome) && !empty($email) && is_numeric($idade) &&
            is_numeric($peso) && !empty($ultima_doacao) && !empty($sexo) &&
            !empty($tipo_sanguineo)
        ) {
            $result = insertDonor($conn, $nome, $email, $idade, $peso, $ultima_doacao, $sexo, $tipo_sanguineo);


            if ($result) {
                echo "Dados inseridos com sucesso!";
            } else {
                echo "Erro na inserção de dados. Por favor, tente novamente mais tarde.";
                // Você também pode adicionar logs internos para rastrear o erro, se necessário
            }
        } else {
            echo "Erro: Dados inválidos recebidos. Certifique-se de preencher todos os campos corretamente.";
        }
    } else {
        echo "Erro: Todos os campos necessários não foram recebidos. Certifique-se de preencher todos os campos.";
    }
} else {
    echo "Erro: Método de solicitação inválido. Este endpoint suporta apenas solicitações POST.";
}
