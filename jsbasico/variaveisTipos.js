//Strings
let nome = "Juliano"; // let permite que a variável seja alterada
const sobrenome = 'Silva'; // const não permite a alteração da variável
let templateString = `O meu nome é ${nome} ${sobrenome}`;

console.log(templateString);

//Numbers
let A = 2;
let B = 5.6;
let C = -3.14;
const PI = 3.14;
let soma = A ** C;

console.log(`${A} ^${C} = ${soma}`);

//Arrays
let numeros = [1, 3, -7, 99, 505.67];
console.log(numeros);
console.log(`numeros[0]=${(numeros[0])}`);
console.log(`numeros[3]=${(numeros[3])}`);

//Object
let pessoa = {
    nome: "João",
    cpf: 123,
    telefones: [61123, 61456]
}
console.log(pessoa);
console.log(pessoa.nome);