// carrega framework express
const express = require('express');

const calculadora = require('./calculadora');

// cria um app do tipo express
const app = express();

// declara porta de execução da aplicação
const PORT = 8080;

// array para guardar respostas do usuario
const LOG = [];

// definição da rota raiz
app.get("/", (req, res)=>{
    res.send('Olá Web');
})


// URL com parametro
app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá ${req.params.nome}`);
})

// URL fixa
app.get("/ola/joao", (req, res)=>{
    res.send('Olá João');
})



// inicializar a aplicação na porta definida
app.listen(PORT, ()=>{
    console.log("app rodando na porta " + PORT);
});

// URL fixa
app.get("/calculador/somar/:a/:b", (req, res)=>{
    let a = number(req.params.a);
    let b = number(req.params.b);
    let resultado = calculadora.somar(a, b);
    let string_resultado = `<h1>${a} + ${b} = ${resultado}<h1>`
    LOG.push(string_resultado)
    res.send(string_resultado);
})