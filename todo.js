var buttonAdd =
document.querySelector
("#add-todo");

buttonAdd.addEventListener
("click", function(event) {
    //Pegando o elemento ul
    let lista = document
    .querySelector
    ("#todo-list");
    //console.log(lista);

    // Pegando valor digitado no input
    let todo = document.querySelector("#new-todo");
    //console.log(todo);
    //console.log(todo.value);

    // Criando li com nova todo
    var newLi = document.createElement("li");
    //console.log(newLi);

    var addI = document.createElement("i");
    addI.className = "fa fa-check-square";
    
    /**
     * Adicionando o valor 
     * digitado no input 
     * dentro da newLi
     */
    
    newLi.textContent = todo.value;

    newLi.appendChild(addI);
    
    //console.log(newLi);

/** Adicionando newLi dentro da ul */
    lista.appendChild(newLi);

})