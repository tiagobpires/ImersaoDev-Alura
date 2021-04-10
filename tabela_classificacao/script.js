var jogadores = []
var contJogador = 0
var contRound = 1

function novoJogador() {
  nomeJogador = document.querySelector("#nome").value
  iconeJogador = document.querySelector("#icones").value
  var jogador = {
    nome: nomeJogador,
    id: contJogador,
    icone: iconeJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  jogadores.push(jogador)
  
  atualizarTabela(jogadores)
  atualizarOptionsRound(jogadores)
  contJogador++
  
  document.querySelector("#nome").value = ''
}

function atualizarOptionsRound (jogadores) {
  var novoHtml = '<select id="jogadores" class="input"> <option value="empate">Empate</option> '
  jogadores.forEach(function(jogador) {
    novoHtml += '<option value=' + jogador.id + '>' + jogador.nome + '</option>'
  })
  document.querySelector("#jogadores").innerHTML = novoHtml
}

function calcularPontos (jogador) {
  jogador.pontos = (jogador.vitorias * 3) + jogador.empates
}

function atualizarTabela (jogadores) {
  jogadores.forEach(calcularPontos)
  var html = ''
  for (var i = 0; i < jogadores.length; i++) {
    html += '<tr><td class="icone"> <img class="icon-img" src="' + jogadores[i].icone + '"> </td>'
    html += '<td>' + jogadores[i].nome + '</td>'
    html += '<td>' + jogadores[i].vitorias + '</td>'
    html += '<td>' + jogadores[i].empates + '</td>'
    html += '<td>' + jogadores[i].derrotas + '</td>'
    html += '<td>' + jogadores[i].pontos + '</td><tr>'
  }
  var tabela = document.querySelector('#tabelaJogadores').innerHTML = html
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  atualizarTabela(jogadores)
}

function adicionarEmpate() {
  jogadores.forEach(function(jogador) {
      jogador.empates++
  })
  atualizarTabela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  atualizarTabela(jogadores)
}

function finalizarRound() {
  var vencedor = document.querySelector("#jogadores").value
  if (vencedor == 'empate') {
    adicionarEmpate()
  } else {
    jogadores.forEach(function(jogador) {
      if (jogador.id == vencedor) {
        adicionarVitoria(jogador.id)
      } else {
        adicionarDerrota(jogador.id)
      }
    })
  }
  atualizarNumeroRound()
}

function atualizarNumeroRound() {
  document.querySelector("#round").innerHTML = 'Round ' + contRound
  contRound++
}


function reiniciar() {
  jogadores.forEach(function(jogador) {
    jogador.vitorias = 0,
    jogador.empates = 0,
    jogador.derrotas = 0,
    jogador.pontos=  0
  })
  atualizarTabela(jogadores)
}