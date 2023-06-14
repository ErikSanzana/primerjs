function calcularTotal() {
  var cantidad = document.getElementById("cantidadInput").value;
  /* saca el valor de cantidad*/
  var color = document.getElementById("colorInput").value;
  /* saco el color */
  var precio = 14990;
  /* defino el valor aunque podria ocupar el valor de la id  pero bueno */
  var total = precio * cantidad;
  /* realizo la operacion de manera correcta */
  var resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML =
    "<h1>detalles de compra</h1>" +
    "Color: <div class='color-circulo' style='background-color: " +
    color +
    ";'></div>" +
    color +
    "<br> Total: $" +
    total+
    "<br> cantidad: "+
    cantidad;
  /* crear un div para crear un circulo y el background lo modifico desde aca segun las necesidades del usuario */
}
