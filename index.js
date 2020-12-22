var body = document.querySelector("body");
var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    this.classList.toggle("active");
    const ativ = btn.getAttribute("class");
    if (ativ == "active") {
        body.style.background = "#121212"
        body.style.color = "#eeeeee"
    }
    else{
        body.style.background = "#eeeeee"
        body.style.color = "#121212"
    }
})