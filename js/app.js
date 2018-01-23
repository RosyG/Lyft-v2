/*Función que manda a llamar al contenedo que será ocultado en el tiempo de la variable time, indicado en el body, al cargarse la página.*/
function splash(time) {
/*Función de splashscreen que recibe al tiempo en ms*/
setTimeout(function () {
  $('#splashcreen').hide(500);
  $('#principal').show("slow");
}, time);
}

//Trayendo elementos de html para darles un evento de click.
$("#sign-up").click(enterPhone);
$(".nextEnterNumber").click(generatingCode);
$("#nextEnterNameEmail").click(enterNameEmail);
$("#nextToSuccess").click(successRegister);
$("#button-resend").click(generatingCode);
$("#backPrincipal").click(backPrincipal);
$("#backEnterPhone").click(backenterPhone);
$("#backVerify").click(backVerify);
$("#back-inicio").click(backPrincipal);
$("#phoneNumber").keyup(verifyPhoneNumber);

//Inicialización del elemento select.
$(document).ready(function() {
  $('select').material_select();
});




//Declaración de funciones.
/*Función que regresa a la ventana anterior.*/
function backPrincipal () {
  $('#enterPhone').hide("slow");
  $('#principal').show("slow");
  $('#successRegister').hide("slow");
  clearVar();
}
/*Función que muestra la página donde se puede ingresar un número.*/
function enterPhone () {
  $('#principal').hide("slow");
  $('#enterPhone').show("slow");
}
/*Función que muestra la página donde se valida el número telefonico.*/
function generatingCode () {
  /*Al habilitar el botón NEXT te muestra un código.*/
  //generando código de manera aleatoria.
  var $random = Math.random()*1000;
  var $code = Math.floor($random);/*El número generado por random() es un decimal, por eso en necesario redondear hacia abajo. */
  console.log($random);
  console.log($code);

  /*Y direcciona a la página principal.*/
  $('#enterPhone').hide("slow");
  $('#verifyPhoneNumber').show("slow");

  //Si se comienza a teclear el código generado se ejecuta la función que capturar lo que el us introduce.
  validation($code);
  alert("Tu código: Lab-"+ $code);
  /*Vacíando el campo para que el usuario introduzca su código.*/
  clearVar();
}

/*Función que muestra la página donde el usuario debe introducir su nombre y su email.*/
function enterNameEmail () {
  $('#verifyPhoneNumber').hide("slow");
  $('#enterNameEmail').show("slow");
}

/*Función que muestra la página donde se le indica al usuario su registro de manera exitosa.*/
function successRegister () {
  $('#enterNameEmail').hide("slow");
  $('#successRegister').show("slow");
}
/*Función que regresa a la página donde el usuario puede introducir su number de telefono.*/
function backenterPhone () {
  $('#verifyPhoneNumber').hide("slow");
  $('#enterPhone').show("slow");
  clearVar();
}
/*Función que regresa a la página donde el usuario verifica su código asignado de manera aleatoria.*/
function backVerify () {
  $('#enterNameEmail').hide("slow");
  $('#verifyPhoneNumber').show("slow");
  clearVar();
}
/*Función que valida el número que introduce el usuario.*/
function verifyPhoneNumber () {
    var $phone = $('#phoneNumber').val(); /*Cadena de texto con los números que el usuario introdujo*/
    var $numberDigits = $phone.length;/*Número de digitos ingresados*/
    if ($numberDigits == 10) {
      $(".nextEnterNumber").attr("disabled", false);/*Botón habilitado*/
    }else {
      $(".nextEnterNumber").attr("disabled", true);/*Botón deshabilitado*/
    }
}
/*Función que hace la comparación entre el código generado y el que introduce el us*/
function validation ($code) {
  $("#enterCode").keyup(function (){
    /*Habilitando el boton, solo si el código introducido es identico al generado.*/
    var $enterCode = parseInt($("#enterCode").val());/*Convirtiendo el string en number para realizar la comparación.*/
    /*Si conincide la comparación entonces se habilita el botón NEXT.*/
    if ($code == $enterCode) {
      $("#nextEnterNameEmail").attr("disabled", false);/*Botón habilitado*/
    }else {
      $("#nextEnterNameEmail").attr("disabled", true);/*Botón deshabilitado*/
    }
  });
}
/*función que limpia todas las variables*/
function clearVar () {
  $("#phoneNumber").val("");/*Donde el us introduce su número*/
  $("#enterCode").val("");/*Donde el us introduce el código*/
  $("#icon_prefix").val("");/*Nombre dek usuario.*/
  $("#icon_telephone").val("");/*Email del usuario.*/



}
