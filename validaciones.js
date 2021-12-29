function valido(){

    var elegir=document.getElementsByName('pc').value;


    var validacorreo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(!document.querySelector('input[name="pc"]:checked')) {
        alert('Debes seleccionar el tipo de producto');
        return false;
    }

    var validacheck;
    validacheck=0;

    var mensaje= "Se comprarán los siguientes repuestos: \n";

    if (document.querySelector('input[name="repuesto"]:checked')){

        mensaje=mensaje+"Pantalla \n";
        validacheck=validacheck+1;

    }

    if (document.querySelector('input[name="repuesto2"]:checked')){
        mensaje=mensaje+"Disco Duro \n";
        validacheck=validacheck+1;
    }

    if (document.querySelector('input[name="repuesto3"]:checked')){
        mensaje=mensaje+"Tarjeta gráfica \n";
        validacheck=validacheck+1;
    }

    if (document.querySelector('input[name="repuesto4"]:checked')){
        mensaje=mensaje+"Teclado \n";
        validacheck=validacheck+1;
    }

    if (document.querySelector('input[name="repuesto5"]:checked')){
        mensaje=mensaje+"Cooler \n";
        validacheck=validacheck+1;
    }

    if (document.querySelector('input[name="repuesto6"]:checked')){
        mensaje=mensaje+"Tarjeta de Red \n";
        validacheck=validacheck+1;
    }

    if (document.querySelector('input[name="repuesto7"]:checked')){
        mensaje=mensaje+"Memoria RAM \n";
        validacheck=validacheck+1;
    }

    if (document.querySelector('input[name="repuesto8"]:checked')){
        mensaje=mensaje+"Mouse. \n";
        validacheck=validacheck+1;
    }

    if (validacheck===0){
        alert('Debes seleccionar al menos un tipo de repuesto');
        return false;
    }

    if (document.querySelector('input[name="pc"]:checked').value==="valorpc1"){
        mensaje=mensaje+"Para una Laptop"
    }

    if (document.querySelector('input[name="pc"]:checked').value==="valorpc2"){
        mensaje=mensaje+"Para una computadora de sobre mesa"
    }

    var usuario1=document.getElementById('usuario').value;
    var contrasena1=document.getElementById('contrasena').value;
    var correo1=document.getElementById('correo').value;
    var direccion1=document.getElementById('textoaro').value;

    if (usuario1 === "" || contrasena1 === "" || correo1 === "" || direccion1=== "" ){

        alert('No has ingresado todos tus datos');
        return false;

    }

    if (contrasena1.length>8 ){

        alert('La contraseña no debe ser mayor a 8 dígitos');
        return false;
    }

    if (usuario1.length>15){

        alert('El nombre de usuario no puede ser mayor a 15 carácteres');
        return false;
    }

    if (!validacorreo.test(correo1)){

        alert('Formato de correo inválido');
        return false;
    }

    let usuario2=document.getElementById('usuario').value;
    let contrasena2=document.getElementById('contrasena').value;
    let correo2=document.getElementById('correo').value;
    let direccion2=document.getElementById('textoaro').value;
    let extra=('\nPara el Usuario: '+usuario2+'\nCon el correo: '+correo2+'\nA la dirección: '+direccion2)

    mensaje=mensaje+extra;

    alert (mensaje);

}

