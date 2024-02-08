let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML= texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos == 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero es menor")
        } else {
            asignarTextoElemento("p", "El numero es mayor")
    }   
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista hacemos a sino b

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos lo numeros
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja,  restaurar de 0, 
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}
condicionesIniciales();


