'use strict';

// Datos personales tomados de: https://randomuser.me/
var nombre = "Violet";
var apellido = "García";
var email = "violet.garcia@example.com";
var fechaDeNacimiento = new Date(1970,5,5);   // 5/6/1970
var direccion = "9515 W Gray St";
var telefono = "(622) 655-7281";


document.getElementById('nombre').innerHTML = nombre + " " + apellido;
document.getElementById('email').innerHTML = email;
document.getElementById('fechaDeNacimiento').innerHTML = fechaDeNacimiento.getDay()
          + " de " + fechaDeNacimiento.toLocaleString('default', { month: 'long' })
          + " de " + fechaDeNacimiento.getFullYear();
document.getElementById('direccion').innerHTML = direccion;
document.getElementById('telefono').innerHTML = telefono;



function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}


counter();
