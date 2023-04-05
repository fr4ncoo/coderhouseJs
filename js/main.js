let precio = NaN;
let cuotas;
let precioCuota;
let precioInteres;

while (isNaN(precio) || precio === 0) {
    precio = parseInt(prompt("Hola, ingresá el monto total del producto que queres pagar en cuotas:"));
}

while (isNaN(cuotas) || !validarCuotas(cuotas)) {
    cuotas = parseInt(prompt("¡Genial! Te informamos los intereses según cantidad de cuotas:\n3 Cuotas: SIN INTERÉS.\n6 Cuotas: 10% de interés.\n9 Cuotas: 15% de interés\n12 Cuotas: 20% de interés.\n¿Cuantas cuotas queres hacer? Ingresar solamente el número de cuotas."));
}

switch (cuotas) {
    case 3:
        precioCuota = precio / 3;
        alert("Seleccionaste 3 cuotas. El precio final es $" + precio.toLocaleString('es-AR') + " y lo pagarás en " + cuotas + " cuotas de $" + precioCuota.toLocaleString('es-AR') + " cada una.");
        break;

    case 6:
        precioInteres = precio + (precio * (10 / 100));
        precioCuota = precioInteres / 6;
        alert("Seleccionaste 6 cuotas. El precio final es $" + precioInteres.toLocaleString('es-AR') + " y lo pagarás en " + cuotas + " cuotas de $" + precioCuota.toLocaleString('es-AR') + " cada una.");
        break;

    case 9:
        precioInteres = precio + (precio * (15 / 100));
        precioCuota = precioInteres / 9;
        alert("Seleccionaste 9 cuotas. El precio final es $" + precioInteres.toLocaleString('es-AR') + " y lo pagarás en " + cuotas + " cuotas de $" + precioCuota.toLocaleString('es-AR') + " cada una.");
        break;

    case 12:
        precioInteres = precio + (precio * (20 / 100));
        precioCuota = precioInteres / 12;
        alert("Seleccionaste 12 cuotas. El precio final es $" + precioInteres.toLocaleString('es-AR') + " y lo pagarás en " + cuotas + " cuotas de $" + precioCuota.toLocaleString('es-AR') + " cada una.");
        break;

    default:
        alert("Ingresar un dato de cuotas válido");
}

function validarCuotas(cuotas) {
    return cuotas === 3 || cuotas === 6 || cuotas === 9 || cuotas === 12;
}
