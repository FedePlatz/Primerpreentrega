function calcularInteres(montoTotal, interes) {
    let interesCalculado = montoTotal * interes;
    return interesCalculado;
  }
  
  const interesMensual1_3 = 0.2;
  const interesMensual4_6 = 0.1;
  const interesMensual7_9 = 0.08;
  const interesMensual10_12 = 0.05;
  
  function calcularCredito(monto, cuotas) {
    switch (true) {
      case cuotas >= 1 && cuotas <= 3:
        return monto + cuotas * calcularInteres(monto, interesMensual1_3);
      case cuotas >= 4 && cuotas <= 6:
        return monto + cuotas * calcularInteres(monto, interesMensual4_6);
      case cuotas >= 7 && cuotas <= 9:
        return monto + cuotas * calcularInteres(monto, interesMensual7_9);
      case cuotas >= 10 && cuotas <= 12:
        return monto + cuotas * calcularInteres(monto, interesMensual10_12);
      default:
        return null;
    }
  }
  
  function validarNumero(valor) {
    return !isNaN(valor);
  }
  
  function obtenerNumeroValido(mensaje) {
    let valor = parseInt(prompt(mensaje));
    while (!validarNumero(valor)) {
      valor = parseInt(prompt("El valor ingresado no es numérico. " + mensaje));
    }
    return valor;
  }
  
  function obtenerCuotasValidas() {
    let cuotas = obtenerNumeroValido("Ingrese el número de cuotas (Max. 12)");
    while (cuotas < 1 || cuotas > 12) {
      cuotas = obtenerNumeroValido("El valor ingresado no corresponde a una cuota válida. Ingrese nuevamente el número de cuotas (Max. 12)");
    }
    return cuotas;
  }
  
  let montoCredito = obtenerNumeroValido("Ingrese el monto que desea de crédito");
  let numCuotas = obtenerCuotasValidas();
  
  let resultado = calcularCredito(montoCredito, numCuotas);
  if (resultado !== null) {
    let resultadoRedondeado = Math.round(resultado);
    alert(`El costo financiero a pagar por el crédito de ${montoCredito} pesos (Arg) a ${numCuotas} cuotas es de ${resultadoRedondeado} pesos (Arg)`);
  } else {
    alert("Ocurrió un error al calcular el costo del crédito. Por favor, inténtelo nuevamente.");
  }
  