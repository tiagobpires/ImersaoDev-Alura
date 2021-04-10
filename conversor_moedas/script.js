var sub = document.querySelector("#converter")

sub.addEventListener('click', function() {
  var dolar = parseFloat(document.querySelector("#valor").value)
  if (!isNaN(dolar)) {
    var real = dolar * 5.53
    document.querySelector("#resultado").innerHTML = `R$${real.toFixed(2)}`
  } else {
    alert("Digita algo valido mah")
  }
})
