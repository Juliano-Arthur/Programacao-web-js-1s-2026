const express = require("express");

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/agendamento", (req, res) => {
  const dados = req.body;

  const hoje = new Date().toISOString().split("T"[0]);

  if (dados.data < hoje) {
    return res.send(`
    <div style="font-family: Arial; padding:20px">
      <h2>Erro: não é possível agendar para datas passadas</h2>
      <a href="/">Voltar</a>
    </div>
  `);
  }

  if (
    !dados.nome ||
    !dados.sobrenome ||
    !dados.cpf ||
    !dados.nascimento ||
    !dados.telefone ||
    !dados.cep ||
    !dados.endereco ||
    !dados.clinica ||
    !dados.especialidade ||
    !dados.data ||
    !dados.hora
  ) {
    return res.send(`
    <div style="font-family: Arial; padding:20px">
        <h2>Erro: preencha todos os campos obrigatórios
        <a href="/">Voltar</a>
    </div>
    `);
  }

  res.send(`<div style="font-family: Arial; padding:20px">
      <h1>Agendamento realizado!</h1>

      <h3>Dados do paciente</h3>
      <p><b>Nome:</b> ${dados.nome} ${dados.sobrenome}</p>
      <p><b>CPF:</b> ${dados.cpf}</p>
      <p><b>Nascimento:</b> ${dados.nascimento}</p>
      <p><b>Telefone:</b> ${dados.telefone}</p>
      <p><b>CEP:</b> ${dados.cep}</p>
      <p><b>Endereço:</b> ${dados.endereco}</p>

      <h3>Dados da consulta</h3>
      <p><b>Clínica:</b> ${dados.clinica}</p>
      <p><b>Especialidade:</b> ${dados.especialidade}</p>
      <p><b>Data:</b> ${dados.data}</p>
      <p><b>Hora:</b> ${dados.hora}</p>
      <p><b>Observação:</b> ${dados.observacao || "Nenhuma"}</p>

      <br>
      <a href="/">Novo agendamento</a>
    </div>`);
});

app.listen(port, () => {
  console.log("Rodando em https.localhost.3000");
});
