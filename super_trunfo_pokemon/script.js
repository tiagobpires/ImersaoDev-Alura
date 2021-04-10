// Cartas
var bulbassaur = {
  nome: "bulbassaur",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
      ataque: 75,
      defesa: 70,
      magia: 65
  }
}
var charmander = {
  nome: "charmander",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  atributos: {
      ataque: 65,
      defesa: 60,
      magia: 75
  }
}
var squirtle  = {
  nome: "squirtle",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos: {
      ataque: 65,
      defesa: 75,
      magia: 60
  }
}
var pidgey = {
  nome: "Pidgey",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
  atributos: {
      ataque: 80,
      defesa: 68,
      magia: 55
  }
}
var ekans = {
  nome: "Ekans",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
  atributos: {
      ataque: 75,
      defesa: 60,
      magia: 40
  }
}
var pikachu = {
  nome: "Pikachu",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  atributos: {
      ataque: 70,
      defesa: 55,
      magia: 85
  }
}
var clefairy = {
  nome: "Clefairy",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
  atributos: {
      ataque: 65,
      defesa: 55,
      magia: 75
  }
}
var nidoking = {
  nome: "Nidoking",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
  atributos: {
      ataque: 78,
      defesa: 75,
      magia: 50
  }
}
var jigglypuff = {
  nome: "Jigglypuff",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
  atributos: {
      ataque: 55,
      defesa: 60,
      magia: 80
  }
}
var psyduck = {
  nome: "Psyduck",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
  atributos: {
      ataque: 54,
      defesa: 58,
      magia: 75
  }
}
var golduck = {
  nome: "golduck",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
  atributos: {
      ataque: 73,
      defesa: 67,
      magia: 53
  }
}
var kadabra = {
  nome: "kadabra",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
  atributos: {
      ataque: 55,
      defesa: 67,
      magia: 85
  }
}
var onix = {
  nome: "onix",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
  atributos: {
      ataque: 62,
      defesa: 88,
      magia: 0
  }
}
var koffing = {
  nome: "koffing",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
  atributos: {
      ataque: 55,
      defesa: 52,
      magia: 77
  }
}
var snorlax = {
  nome: "snorlax",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
  atributos: {
      ataque: 62,
      defesa: 80,
      magia: 50
  }
}
var dragonite = {
  nome: "dragonite",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
  atributos: {
      ataque: 82,
      defesa: 70,
      magia: 86
  }
}
var mewtwo = {
  nome: "mewtwo SUPER TRUNFO",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  atributos: {
      ataque: 100,
      defesa: 100,
      magia: 100
  }
}
var articuno = {
  nome: "articuno",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
  atributos: {
      ataque: 86,
      defesa: 72,
      magia: 90
  }
}
var jolteon = {
  nome: "jolteon",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
  atributos: {
      ataque: 73,
      defesa: 64,
      magia: 58
  }
}
var lapras = {
  nome: "lapras",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
  atributos: {
      ataque: 80,
      defesa: 75,
      magia: 70
  }
}

var cartas = [bulbassaur, charmander, squirtle, pidgey, ekans, pikachu, clefairy, nidoking, jigglypuff, psyduck, golduck, kadabra, onix, koffing, snorlax, dragonite, mewtwo, articuno, jolteon, lapras]

// Sortear Cartas Iniciais
function randOrd() {
  return (Math.round(Math.random())-0.5);
}
cartas.sort(randOrd);

// Dividir Cartas em 2 baralhos
var baralhoJogador = []
var baralhoMaquina = []
for (var i = 0; i < cartas.length; i++) {
  if (i % 2 == 0) {
      baralhoJogador.push(cartas[i])
  } else {
      baralhoMaquina.push(cartas[i])
  }
}

var cartaMaquina
var cartaJogador

var pontosJogador = 0
var pontosMaquina = 0
var round = 0

atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var quantidadeCartas = baralhoJogador.length + baralhoMaquina.length
  var html = "Quantidade de cartas no jogo: " + quantidadeCartas

  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divEscoreJogador = document.getElementById('escore-jogador')
  var htmlJogador = "<p> Vitórias: " + pontosJogador + "</p>"
  divEscoreJogador.innerHTML = htmlJogador

  var divEscoreMaquina = document.getElementById('escore-maquina')
  var htmlMaquina = "<p> Vitórias: " + pontosMaquina + "</p>"
  divEscoreMaquina.innerHTML = htmlMaquina
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * baralhoMaquina.length)
  cartaMaquina = baralhoMaquina[numeroCartaMaquina]
  baralhoMaquina.splice(numeroCartaMaquina, 1)

  var numeroCartaJogador = parseInt(Math.random() * baralhoJogador.length)
  cartaJogador = baralhoJogador[numeroCartaJogador]
  baralhoJogador.splice(numeroCartaJogador, 1)
  
  // Retira a opção de sortear
  document.getElementById('baralho-jogador').innerHTML = '<img id="img-baralho-jogador" src="https://guloseimasnerds.files.wordpress.com/2017/02/verso-carta-pkm.jpg"> <figcaption> Sorteie sua carta clicando nela</figcaption>'
  document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
  if (round % 2 != 0) {
      document.getElementById('btnJogar').disabled = true
      setTimeout(function() {
        jogar(); 
      }, 600);
  }
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
   
  // Se for round do Jogador, ele mostra com input
  if (round % 2 == 0) {
      for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
      }
  } else {
      for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
      }
  }

  var html = "<div id='opcoes' class='carta-status'>"

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
  // Se o numero do round for par, é a vez do jogador
  if (round % 2 == 0) {
      var radioAtributo = document.getElementsByName('atributo')
      for (var i = 0; i < radioAtributo.length; i++) {
          if (radioAtributo[i].checked) {
              return radioAtributo[i].value
          }
      }
  } else {
      // Vez da Maquina
      if (cartaMaquina.atributos['ataque'] >= cartaMaquina.atributos['defesa'] && cartaMaquina.atributos['ataque'] > cartaMaquina.atributos['magia']) {
          return 'ataque'
      } else if (cartaMaquina.atributos['defesa'] > cartaMaquina.atributos['magia']) {
          return 'defesa'
      } else {
          return 'magia'
      }
  }
}

function jogar() {  
  var divResultado = document.getElementById("resultado")
  
  var atributoSelecionado = obtemAtributoSelecionado()
  if (atributoSelecionado == undefined) {
      document.getElementById("resultado").innerHTML = '<h1>Você não selecionou nenhum atributo</h1>'
      return
  }
  // Se o round for da Maquina, avisa o atributo escolhido
  if (round % 2 != 0) {
      document.getElementById('round').innerHTML = '<div id="feedback-round">Vez da Maquina - atributo escolhido: ' + atributoSelecionado + '</div>'
  }

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador++
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++
  } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>'
  }

  if (baralhoJogador.length == 0 || baralhoMaquina.length == 0) {
      alert("Fim de jogo")
      if (pontosJogador > pontosMaquina) {
          htmlResultado = '<p class="resultado-final">Você é o vencedor!</p>'
      } else if (pontosMaquina > pontosJogador) {
          htmlResultado = '<p class="resultado-final">A maquina venceu!</p>'
      } else {
          htmlResultado = '<p class="resultado-final">Empataram!</p>'
      }
  } else {
      document.getElementById('btnProximaRodada').disabled = false
  }

  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  
  round++

  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }

  var html = "<div id='opcoes' class='carta-status --spacing'>"

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  
  if (round % 2 == 0) {
      document.getElementById('round').innerHTML = '<div id="feedback-round">Sua vez - Sorteie sua carta e selecione o atributo</div>'
  } else {
      document.getElementById('round').innerHTML = '<div id="feedback-round">Vez da Maquina - Sorteie sua carta</div>'
  }
  var divCartas = document.getElementById('cartas')

  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

  // Retorna a opção de sortear
  document.getElementById('baralho-jogador').innerHTML = '<img onClick="sortearCarta()" id="img-baralho-jogador" src="https://guloseimasnerds.files.wordpress.com/2017/02/verso-carta-pkm.jpg"> <figcaption> Sorteie sua carta clicando nela</figcaption>'
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true

  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}