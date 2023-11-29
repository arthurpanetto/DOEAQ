function verificarAptidao() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value; // Adicionado o campo de e-mail
  const idade = parseInt(document.getElementById("idade").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const ultimaDoacao = new Date(document.getElementById("ultima_doacao").value);

  const hoje = new Date();
  const diferenca = hoje - ultimaDoacao;
  const diasPassados = Math.floor(diferenca / (1000 * 60 * 60 * 24)); // Calcula a diferença em dias

  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const tipoSanguineo = document.getElementById("tipoSanguineo").value;

  let resultado = "";

  if (idade >= 18 && idade <= 65 && peso >= 50) {
    if (
      (sexo === "masculino" && diasPassados >= 60) ||
      (sexo === "feminino" && diasPassados >= 90)
    ) {
      if (tipoSanguineo === "O-") {
        resultado += `${nome}, você é do tipo sanguíneo O-, que é o tipo universal. Você é sempre bem-vindo para doar sangue!`;
        insertDataIntoDatabase(
          nome,
          email,
          idade,
          peso,
          ultimaDoacao,
          sexo,
          tipoSanguineo
        );
      } else {
        resultado = `${nome}, você está apto para doar sangue. Obrigado por sua disposição em doar!`;

        // Se os critérios de elegibilidade forem atendidos, insira os dados no banco de dados
        insertDataIntoDatabase(
          nome,
          email,
          idade,
          peso,
          ultimaDoacao,
          sexo,
          tipoSanguineo
        );
      }
    } else {
      let diaMinimo = sexo === "masculino" ? 60 : 90;

      resultado = `${nome}, você não atende aos requisitos de intervalo de doação. Pessoas do sexo ${sexo} devem esperar no mínimo ${diaMinimo} dias até a próxima doação.`;
    }
  } else {
    resultado = `${nome}, você não atende aos requisitos mínimos para doação de sangue. Motivos:`;
    if (idade < 18) {
      resultado += ` Você deve ter pelo menos 18 anos.`;
    }
    if (idade > 65) {
      resultado += ` Você tem mais de 65 anos.`;
    }
    if (peso < 50) {
      resultado += ` Seu peso é inferior a 50 kg.`;
    }
    if (peso > 200) {
      resultado += ` Seu peso é superior a 200 kg.`;
    }
  }

  document.getElementById("resultado").textContent = resultado;
}

function insertDataIntoDatabase(
  nome,
  email,
  idade,
  peso,
  ultimaDoacao,
  sexo,
  tipoSanguineo
) {
  console.log(
    "Parâmetros recebidos:",
    nome,
    email,
    idade,
    peso,
    ultimaDoacao,
    sexo,
    tipoSanguineo
  );

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var response = xhr.responseText;
        console.log("Resposta do servidor:", response); // Registra a resposta do servidor
        // Você pode lidar com a resposta conforme necessário (por exemplo, exibir uma mensagem de sucesso)
      } else {
        console.error("Erro na solicitação AJAX");
      }
    }
  };

  xhr.open("POST", "../insert_data.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(
    "nome=" +
      nome +
      "&email=" +
      email +
      "&idade=" +
      idade +
      "&peso=" +
      peso +
      "&ultima_doacao=" +
      ultimaDoacao.toISOString().slice(0, 10) + // Convertendo para o formato YYYY-MM-DD
      "&sexo=" +
      sexo +
      "&tipo_sanguineo=" +
      tipoSanguineo
  );
}
