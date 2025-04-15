//.length() => tamanho

//let frutas = ["Maça", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa","Melancia", "Abacate", 
             // "Caqui", "Uva sem semente", "Jabuticaba", "Roma", "Seriguela", "Embu",];

//console.long(frutas.length);    

//---------------------------------------------------------------------------------------------------------------------

//let numeros = [70, 300, 200, 20000];
//numeros.reserve();
//console.log(numeros);

//---------------------------------------------------------------------------------------------------------------------

//let nomes = [Sophia, Ricardo, Leila, Pamela, Rafael, Isabelly];

//.push() => Adiciona no final 
//nomes.pusch("Luiz Otavio");

//.unshift() => Adicionar no inicio
//nomes.unshift("Vitor");

//.pop() => Remover no final
//nomes.pop(); 

//.shift() => Remove o inicio 
//nomes.shift();

//.splice = > Adiconar ou remove elementos Arrays 
//nomes.splice(0,2);

//console.log(nomes);

//---------------------------------------------------------------------------------------------------------------------

//let nomesAnimais = ["Julie", "Meg", "Mel", "Floquinho", "Kiara", "Lola"];

//.includes() => Se existe no array, se existir ele retornara rue 
//console.log(nomesAnimais.incluides("Sol"));

//---------------------------------------------------------------------------------------------------------------------

//let valores = [ "40", "10","99", "80", "30", "60" ];

////Quero os valores maiores que 50 
//const maiores = valores.filter(num => num > 50);

//console.log(maiores);

//---------------------------------------------------------------------------------------------------------------------

//.map() = Definicao: Metodo usado ek arrays que permite transformar os elementos do array original e,
// novos valores, criando um novo array, sem modificar o roginal.

//Lista de nomes de alunos e notas
// let alunos = [
//     {nome: "Yasmin", nota: 10},
//     {nome: "Kayke", nota: 7},
//     {nome: "Anna", nota: 10},
//     {nome: "Joao", nota: 8},
//     {nome: "Machado", nota: 10},
//     {nome: "Isadora", nota: 9},
//     {nome: "Guilherme", nota: 10},
//     {nome: "Vinicius", nota: 10}  
// ];
// //Lista de nomes 
// let alunoNomes = alunos.map(itemdalista => itemdalista.nome); 

// //Funcao:
// let alunoNomesDois = alunos.map(function (aluno))
// {return aluno.nomes};

// console.log(alunoNomes);

//-----------------------------------------

//2.Criar um array com mensagem personalizadas
// let nomes = ["Caio", "Dani", "Ryan", "Kaue"];

// //Olá Caio
// //Olá Dani

// let mensagem = nomes.map(itemDoArrayNomes => 'Olá, ${itemDoArrayNomes}');

// console.log(mensagem); 

//-----------------------------------------

//3. Pegar apenas os primeiros caracteres de nomes 

// let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"];

// let inicialNomes = nomes.map(itemNomes => itemNomes[0]);

// console.log(inicialNomes);

//-----------------------------------------

//4. kaua@gmail.com , pedro@hotmail.com, julia@outlook.com

let emails = [
    "kaua@gmail.com", "pedro@hotmail.com", "julia@outlook.com"
]

let dominios = emails.map(element => element.split ("@") [1] );

console.log(dominios);

//---------------------------------------------------------------------------------------------------------------------
 