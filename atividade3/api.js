import express from "express";

const app = express();
const PORT = 3000;

// "banco de dados" em memória
let arrResponse = [];

// Rota inicial
app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

//  LISTAR
app.get("/listar", (req, res) => {
  res.json(arrResponse);
});

//  ADICIONAR
app.get("/adicionar/:id/:nome/:qtd", (req, res) => {
  const { id, nome, qtd } = req.params;

  const existe = arrResponse.find((item) => item.id == id);

  if (existe) {
    return res.send("Já existe um item com esse ID");
  }

  const novoItem = {
    id: Number(id),
    name: nome,
    qtd: Number(qtd),
  };

  arrResponse.push(novoItem);

  res.send("Item adicionado com sucesso!");
});

//  REMOVER
app.get("/remover/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = arrResponse.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.send("Item não encontrado");
  }

  arrResponse.splice(index, 1);

  res.send("Item removido com sucesso");
});

//  EDITAR QUANTIDADE
app.get("/editar/:id/:qtd", (req, res) => {
  const { id, qtd } = req.params;

  const item = arrResponse.find((item) => item.id == id);

  if (!item) {
    return res.send("Item não encontrado");
  }

  item.qtd = Number(qtd);

  res.send("Quantidade atualizada com sucesso");
});

//  SERVIDOR
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
