function sumar() {
  // Obtener los valores de los inputs
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  
  // Validar que sean números válidos
  if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById('resultado').textContent = 'Por favor ingresa números válidos';
    document.getElementById('resultado').style.color = 'red';
    return;
  }
  
  // Calcular la suma
  const suma = numero1 + numero2;
  
  // Mostrar el resultado
  document.getElementById('resultado').textContent = `${numero1} + ${numero2} = ${suma}`;
  document.getElementById('resultado').style.color = '#333';
}