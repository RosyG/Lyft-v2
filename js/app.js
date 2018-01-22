/*Función que manda a llamar al contenedo que será ocultado en el tiempo de la variable time, indicado en el body, al cargarse la página.*/
function splash(time) {
/*Función de splashscreen que recibe al tiempo en ms*/
setTimeout(function () {
  $('#splashcreen').hide(500);
  $('#principal').show("slow");
}, time);
}

//Trayendo elementos de html para darles un evento.
$("#sign-up").click(enterPhone);

//Inicialización del elemento select.
$(document).ready(function() {
  $('select').material_select();
});

//Declaración de funciones.
function enterPhone () {
  $('#principal').hide("slow");
  $('#enterPhone').show("slow");
}
