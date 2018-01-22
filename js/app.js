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
}
/*Función que muestra la página donde se puede ingresar un número.*/
function enterPhone () {
  $('#principal').hide("slow");
  $('#enterPhone').show("slow");
  console.log("hola");
}
/*Función que muestra la página donde se valida el número telefonico.*/
function generatingCode () {
  /*Al habilitar se el botón NEXT te muestra un código.*/
  alert("Soy un código");
  /*Y direcciona a la página principal.*/
  $('#enterPhone').hide("slow");
  $('#verifyPhoneNumber').show("slow");
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
}
/*Función que regresa a la página donde el usuario verifica su código asignado de manera aleatoria.*/
function backVerify () {
  $('#enterNameEmail').hide("slow");
  $('#verifyPhoneNumber').show("slow");
}
/*Función que valida el número que introduce el usuario.*/
PhoneNumber
function verifyPhoneNumber(country) {
    var $phone = $('#phoneNumber').val();
    console.log($phone);
    if (country !== 'none' && phone.length === 10) {
        $(".nextEnterNumber").removeAttr('disabled');
        $(".nextEnterNumber").addClass('able');
    } else {
        $(".nextEnterNumber").attr('disabled', true);
        $(".nextEnterNumber").removeClass('able');
    }
}
