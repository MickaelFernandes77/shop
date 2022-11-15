function active() {
    // Var dos circulos
    var c1 = document.getElementById("circle1");
    var c2 = document.getElementById("circle2");
    var c3 = document.getElementById("circle3");


    if (c1) {
        // alteração para a cor do circulo desativado
        var cG2 = c2.style.color = "#707070";
        var cG3 = c3.style.color = "#707070";
        // alteração para a cor do circulo ativado
        var cR1 = c1.style.color = "#ca3b3a";
        // troca das cores
        document.c1.appendChild(cR1);
        document.c2.appendChild(cG2);
        document.c3.appendChild(cG3);
    }

}

function active2() {
    // Var dos circulos
    var c1 = document.getElementById("circle1");
    var c2 = document.getElementById("circle2");
    var c3 = document.getElementById("circle3");

    if (c2) {
        // alteração para a cor do circulo desativado
        var cG1 = c1.style.color = "#707070";
        var cG3 = c3.style.color = "#707070";
        // alteração para a cor do circulo ativado
        var cR2 = c2.style.color = "#ca3b3a";
        // troca das cores
        document.c2.appendChild(cR2);
        document.c1.appendChild(cG1);
        document.c3.appendChild(cG3);
    }
}

function active3() {
    // Var dos circulos
    var c1 = document.getElementById("circle1");
    var c2 = document.getElementById("circle2");
    var c3 = document.getElementById("circle3");


    if (c3) {

        // alteração para a cor do circulo desativado
        var cG1 = c1.style.color = "#707070";
        var cG2 = c2.style.color = "#707070";
        // alteração para a cor do circulo ativado
        var cR3 = c3.style.color = "#ca3b3a";

        // troca das cores
        document.c3.appendChild(cR3);
        document.c1.appendChild(cG1);
        document.c2.appendChild(cG2);
    }

}