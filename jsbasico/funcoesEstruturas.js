//function - bloco de codigo que pode ser acionado
//DRY dont repeat yourself

function imprimirOlaMundo(){
    console.log("Olá, mundo!");
}

imprimirOlaMundo(); // chamada da função

function somar(A, B){
    let soma = A + B;
    console.log(soma);
}

somar(2,5);
somar(2,4);
somar(3,7);

//Estruturas de repetição
let i;
for(i = 0; i <= 10; i++){
    console.log(i);
    }


while(i<= 5){
    console.log(i);
    i++;
}

//Estrutura condicional
let idade = 18
if(idade >= 18){
    console.log("é maior de idade");
} else {
    console.log('é menor de idade');
}

//Exercício

function verificarparidade(n){
    let validar;
    if(n % 2 == 0){
        return(validar = true)
    }else{
        return(validar = false)
    }
}

function apresentarMensagemParidade(n){
    if(verificarparidade(n) == true){
        console.log(`${n} é par`)
}else{
    console.log(`${n} é impar`)
}}

apresentarMensagemParidade(2);
apresentarMensagemParidade(3);

function calcularIMC(peso, altura){
   let imc = {valor: peso / (altura * altura),
            categoria: ""
   }

   if(imc < 18,5){
    imc.categoria = "baixo peso"
   }else if(imc < 24,9){
    imc.categoria = "peso normal"
   }else if(imc < 29,9){
    imc.categoria = "excesso de peso"
   }else if(imc < 35){
    imc.categoria = "obesidade"
   }else if(imc >= 35){
    imc.categoria = "obesidade extrema"
   }

   console.log(`Peso = ${peso} Altura = ${altura} Valor = ${imc.valor} Categoria = ${imc.categoria} `)
}

calcularIMC(60, 1.60)