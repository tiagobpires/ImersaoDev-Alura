var series = ["HIMYM", "This Is Us", "Modern Family", "Brooklyn 99", "Friends", "The 100", "Ginny & Georgia"]
var imgSeries = ["https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_UY268_CR9,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYjNlOWY2OWEtMGQyOC00YWQ4LWJkMjUtYzU4NGEzNjM2MWY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzRhNWIxYTEtYjc2NS00YWFlLWFhOGEtMDZiMWM1M2RkNDkyXkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_UY268_CR17,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQ2ZWFlNmEtNWYyYy00Yjk1LWIxMTEtMWVkM2NlMTEzOGI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg"]
var trailers = ["https://www.youtube.com/embed/C8-4jMTOUJI","https://www.youtube.com/embed/rR6-fctDmB0&t=1s","https://www.youtube.com/embed/HF1Z3ZYipIE","https://www.youtube.com/embed/sEOuJ4z5aTc","https://www.youtube.com/embed/hDNNmeeJs1Q","https://www.youtube.com/embed/ia1Fbg96vL0","https://www.youtube.com/embed/QsacpJwXCO8"]

var jaEscolheu = []
for (var i = 0; i < series.length+1; i++) {
  jaEscolheu.push(false)
}

var submit = document.querySelector("#add")

submit.addEventListener('click', function() {
  var serie = parseInt(document.querySelector("#options").value)
  if (jaEscolheu[serie] == false) {
    var qntdStars = document.querySelector("#stars").value
    adicionarSerie(series[serie], imgSeries[serie], trailers[serie], qntdStars)
    jaEscolheu[serie] = true
  } else {
    alert("Série já escolhida!")
  } 
})

function adicionarSerie (nome, imagem, trailer, qntdStars) {
  var catalogo = document.querySelector("#catalogo")
  // Guarda o html antigo para atualiza-lo
  var htmlTemporario = catalogo.innerHTML
  // Cria tag figure com a nova serie
  var novoHtml = '<figure class="serie"> <a href="' + trailer + '" target="_blank">' + '<img class="imgSerie"src=' + imagem + '> </a>' + '<figcaption class="titulo">' + nome + '<br>'
  // Cria as estrelas de classificação
  var stars = ''
  for (var i = 0; i < qntdStars; i++) {
    stars = stars + '<span class="fa fa-star checked"></span>'
  }
  for (var i = 0; i < 5 - qntdStars; i++) {
    stars = stars + '<span class="fa fa-star"></span>'
  }
  // Finaliza o novo html
  novoHtml += stars + '</figcaption></figure>'
  // Atualiza o html passado, concatenando com o novo
  catalogo.innerHTML = htmlTemporario + novoHtml
}

var submitNovoFilme = document.querySelector("#adicionarNovoFilme")
submitNovoFilme.addEventListener('click', function() {
  var nome = document.querySelector("#name").value
  var img = document.querySelector("#urlImg").value
  var trailer = document.querySelector("#trailer").value
  if (checar(nome, img, trailer) == true) {
    var stars = document.querySelector("#novaSerieStar").value
    adicionarSerie(nome, img, trailer, stars)
    novoFilme();
    resetar();
  }
})

var cliqueiNovoFilme = false
function novoFilme() {
  var form = document.querySelector("#form")
  if (cliqueiNovoFilme == false) {
    form.style.display = "block"
    cliqueiNovoFilme = true;
  } else {
    form.style.display = "none"
    cliqueiNovoFilme = false
  }
}

function resetar() {
  document.querySelector("#name").value = ''
  document.querySelector("#urlImg").value = ''
  document.querySelector("#trailer").value = ''
}

function checar(nome, img, trailer) {
  if (nome == '') {
    alert('Nome não foi inserido!')
    return false
  } else if (!img.endsWith('.jpg')) {
    alert('Foto de capa não é .jpg')
    return false
  } 
  return true
}
