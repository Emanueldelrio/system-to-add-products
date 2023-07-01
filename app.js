"use strict";

function calcularTotal() {
    const codigoInputs = document.getElementsByClassName('codigo-input');
    const descripcionInputs = document.getElementsByClassName('descripcion-input');
    const cantidadInputs = document.getElementsByClassName('cantidad-input');
    const precioInputs = document.getElementsByClassName('precio-input');
    
    let subtotal = 0;
    
    for (let i = 0; i < codigoInputs.length; i++) {
      const codigo = codigoInputs[i].value;
      const descripcion = descripcionInputs[i].value;
      const cantidad = parseInt(cantidadInputs[i].value);
      const precio = parseFloat(precioInputs[i].value);
      
      //algorithm
      const precioNeto = cantidad * precio;
      subtotal += precioNeto;
    }
    
    const provincia = parseFloat(document.getElementById('provincia').value);
    const impuestos = subtotal * provincia;
    const total = subtotal + impuestos;
    
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('impuestos').textContent = impuestos.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
  }
  