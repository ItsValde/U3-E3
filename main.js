alert("Bienvenido al ejercicio de JavaScript");

const respuesta = confirm("¿Quieres continuar?");

alert(respuesta);

if (respuesta === true) {

    const texto = prompt("Introduce un texto:");

    if (texto !== null) {
        alert("Has escrito: " + texto);
    }
}