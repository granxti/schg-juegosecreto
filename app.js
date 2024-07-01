let numeroSecreto;
//console.log(numeroSecreto);
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//////////////////////
let intentos;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;  //no regresa nada
}

function intentoDeusuario(){
    //alert('click desde el boton');
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log(typeof numeroDeUsuario);
    //console.log(typeof numeroSecreto);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    //console.log(numeroSecreto === numeroDeUsuario);
    
   if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`);    
        //document.getElementById('intentar').setAttribute('disabled','true')
        document.querySelector('#intentar').setAttribute('disabled','true')
        document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
        //usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es MENOR!');        
        }else{
            asignarTextoElemento('p','El numero secreto es MAYOR!');
        }
        /*
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es MENOR!');        
        }else{
        asignarTextoElemento('p','El numero secreto es MAYOR!');
        }
        */
        intentos++;
        limpiarCaja();
   }
   return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function mensajesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto.');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja();  //limpari caja
    mensajesIniciales();
    //indicar mensaje de intervalo
    //generar nuevo numero aleatorio
    //deshabilitar el boton de nuevo juego
    ///iniciar numero de intentos
    
    // cualquiera de las 2 inturciones para obtener el elemento es correcto
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('intentar').removeAttribute('disabled');
    }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10) + 1; 
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
         asignarTextoElemento('p','ya diste todos lo numeros');    
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
       
}

/////// incia el programa
mensajesIniciales();
