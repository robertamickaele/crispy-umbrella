var body = document.querySelector("body");
var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    this.classList.toggle("active");
    const ativ = btn.getAttribute("class");
    if (ativ == "active") {
        body.style.background = "#121212"
        body.style.color = "#cccccc"
    }
    else{
        body.style.background = "#cccccc"
        body.style.color = "#121212"
    }
})