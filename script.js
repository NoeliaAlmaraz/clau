

function mostrarCard(){
    document.getElementById('mostarPuntuacion').style.display = 'none';
    var elemento = document.getElementById('mostarDecision');
    elemento.classList.remove("hiddenuno");
} 

let puntuacion = 0;

function mostrarResultado(valor){
    document.getElementById('mostarDecision').style.display = 'none';
    var decision = document.getElementById('ultimaCard');
    decision.classList.remove('hiddendos');

    puntuacion = valor;
    if (valor == 1){
        document.getElementById('medio').style.display = 'none';
        document.getElementById('nada').style.display = 'none';
    } else {
        if (valor ==2){
            document.getElementById('amor').style.display = 'none';
            document.getElementById('nada').style.display = 'none';
        } else {
            document.getElementById('amor').style.display = 'none';
            document.getElementById('medio').style.display = 'none';
        }
    }
}