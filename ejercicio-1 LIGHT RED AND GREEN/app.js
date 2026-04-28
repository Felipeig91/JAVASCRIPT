function encenderLed(color) {
  // Primero apagamos ambos para que no se mezclen
  apagarTodo();

  if (color === 'rojo') {
    document.getElementById('led-rojo').classList.add('rojo-encendido');
  } else if (color === 'verde') {
    document.getElementById('led-verde').classList.add('verde-encendido');
  }
}

function apagarTodo() {
  document.getElementById('led-rojo').className = 'led';
  document.getElementById('led-verde').className = 'led';
}