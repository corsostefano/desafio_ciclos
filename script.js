document.getElementById("boton").onclick = function () {
    let usuario= document.getElementById("numerosCiclos").value;
    let repeticiones= 1;
    let maquina= 7;
    let detener= false;

    while (repeticiones <= usuario && detener == false){

        if(usuario == maquina){
            document.getElementById("resultado").innerHTML += "Ganaste";
            detener = true;

        }else{
            document.getElementById("resultado").innerHTML += "perdiste x:" + repeticiones + "</br>"
            repeticiones ++;
        }
    }
}