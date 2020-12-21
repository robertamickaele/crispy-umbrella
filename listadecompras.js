var lista = document
.querySelector("#list");
//console.log(lista);

function addItem() {
    /** Pegando valores digitados nos inputs */
    // Valor do Item
    var item = document
    .querySelector("#new-item")
    .value;
    //console.log(item);

    //Valor do Item
    var valor = document
    .querySelector("#value-item")
    .value;
    //console.log(valor);

    /** Criando elemento tr */
    var tr = document
    .createElement("tr");
    //console.log(element);

    /** Criando td ITem */
    var td = document
    .createElement("td");

    /** Criando td Valor */
    var tdValue = document
    .createElement("td");
    //console.log(tdItem);
    //console.log(tdValue);

    /** Adicionando id na td */
    tdValue.id = "valor";
    //console.log(tdValue);

    /** Adicionando texto na td Item */
    tdItem.textContent = item;
    //console.log(tdItem);

    /** Adicionando texto na td Valor */
    tdValue.textContent = valor;
    //console.log(tdValue);

    /** Adicionando tdItem na tr */
    tr.appendChild(tdItem);

    /** Adicionando tdValue na tr */
    tr.appendChild(tdValue);
    //console.log(tr);

    /** Adicionando tr dentro da lista */
    lista.appendChild(tr);

    /** Adicionando função de somar itens */
    somaLista();
}

function somaLista() {
    /** Pegando tds com valores dos itens */
    let tdValue = document
    .querySelectorAll("#valor");
    //console.log(tdValue);

    var values = [];
    var valorTotal = 0;

    /** Estrutura condicional para verificar e setar valores na array */
    for (let index = 0; index < tdValue.length; index++) {
        /** Setando texto da td dentro do array values usando como referência o index */
        values[index] = parseFloat(tdValue[index].textContent);
        /** Somando valor da variável valorTotal com o valor da td */
        valorTotal+= parseFloat(values[index]);
    }

    /** Pegando td de valor total */
    var tdValorTotal = document
    .querySelector("soma");

    /** Adicionando some de valores na td */
    tdValorTotal.textContent = valorTotal;
}