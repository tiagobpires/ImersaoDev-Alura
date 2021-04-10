var submit= document.querySelector("#start")

submit.addEventListener('click', function() {
  var tentativas = parseInt(document.querySelector("#numTentativas").value)
  
  // Checa se os números foram inseridos corretamente
  if (isNaN(tentativas)) {
    tentativas = 3;
  }
  
  var min = parseInt(document.querySelector("#min").value)
  if (isNaN(min)) {
    min = 0;
  }
  
  var max = parseInt(document.querySelector("#max").value)
  if (isNaN(max)) {
    max = 10;
  }
  
  if (min > max) {
    var temp = min
    min = max
    max = temp
  } else if (min == max) {
    min = 0, max = 10
  }
  
  // Gera número a ser adivinhado
  var numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
  
  // Esconde os inputs
  inputs = document.querySelectorAll("input") 
  for (var i = 0; i < 3; i++) { 
    inputs[i].style.display = 'none'
  }
  // Modifica visualmente para tentativas de adivinhar
  document.querySelector("#start").style.display = 'none'
  document.querySelector("#tentar").style.display = 'inline'
  document.querySelector("#labelMin").innerHTML = "Mínimo: " + min
  document.querySelector("#labelMax").innerHTML = "Máximo: " + max
  document.querySelector("#tentativas").innerHTML = "Tentativas: " + tentativas + "<br>"
  
  feedback = document.querySelector("#feedback")
  
  // Usuário vai tentar adivinhar o número  
  var subTentativa = document.querySelector("#check")
  subTentativa.addEventListener('click', function() {
     var chute = document.querySelector("#numAdivinhe").value
     var acertou = false
     if (chute == numeroSecreto) {
        feedback.innerHTML = "Correto! &#128513;"
        document.querySelector("#tentar").style.display = 'none'
        tentativas = 0
        acertou = true
        reload()
     }
     else if (chute > numeroSecreto) {
       feedback.innerHTML = "O número é menor"
       tentativas--
       atualizaTentativas(tentativas)
     }
     else if (chute < numeroSecreto) {
       feedback.innerHTML = "O número é maior"
       tentativas--
       atualizaTentativas(tentativas)
     }
  
     if (tentativas == 0 && acertou == false) {
       document.querySelector("#tentar").style.display = 'none'
       feedback.innerHTML = "Acabaram as tentativas &#128555;<br>O número correto era " + numeroSecreto 
       reload()
     }
    
  })
 
})

function reload() {
  document.querySelector("#reload").style.display = 'block'
  var subReload = document.querySelector("#reload")
    subReload.addEventListener('click', function() {
       window.location.reload(false); 
    })
}

function atualizaTentativas(tentativas) {
  document.querySelector("#tentativas").innerHTML = "Tentativas: " + tentativas + "<br>"
}