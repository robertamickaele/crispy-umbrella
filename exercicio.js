// Exercício

// 1. Declare uma variável de nome color

var color;

// 2. Que tipo de dado é a variável acima?

String

console.log(typeof color);

/*
    3. Declare uma variável e atribua valores para cada um dos dados.
        > name: String
        > age: Number
        > isAdmin: Boolean
        > stars: Number (float)

*/

let name = 'Roberta';
let age = 24;
let isAdmin = true;
let stars = 4.5;

const person = {};

// 4. A variável person é de que tipo de dado?

Objeto

// 5. Atribua à ela as nossas propriedades e valores da questão 3.

const person = {
    name: 'Roberta',
    age: 24,
    admin: true,
    stars: 4.5
}

// 6. Mostre no console a seguinte mensagem: Nome: <name> Idade: <age> Qualificação: <start> Administrador: <isAdmin>.

console.log(typeof person)

// 7. Declare uma variável de tipo array, de nome students e atribua à ele nenhum valor, ou seja, somente o array vazio.

var students = [];

console.log(typeof students);

// 8. Reatribua valor para a variável acima, colocando dentro dela o objeto da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ela no array)

var students = [person];

console.log(students);

// 9.Coloque no console o valor da posição zero do Array acima.

console.log(students[0]);

// 10.  Crie uma nova persona e coloque na posição 1 do array students.

const persona = {
    name: 'Matt',
    age: 20,
    admin: false,
    stars: 4.8
}

students = [
    person,
    persona
]

console.log(students);