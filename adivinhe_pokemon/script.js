var pokemon1 = ["bulbasaur", "ivysaur", "venusaur"]
var imgpokemon1 = ["https://i.pinimg.com/originals/e7/91/72/e79172fef348260adb1de1406b332deb.png", "https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png"]
var pokemon2 = ["charmander", "charmeleon", "charizard"]
var imgpokemon2 = ["https://i.pinimg.com/originals/a3/d8/6d/a3d86d90b5693e73588c88ad8776ccd7.png", "https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/006charizard-os-anime_jetu.png?resize=458%2C490&ssl=1"]
var pokemon3 = ["squirtle", "wartortle", "blastoise"]
var imgpokemon3 = ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"]
var cont1 = 0, cont2 = 0, cont3 = 0

var sub1 = document.querySelector("#check1")
var sub2 = document.querySelector("#check2")
var sub3 = document.querySelector("#check3")

sub1.addEventListener('click', function() {
    var name = document.querySelector("#poke1").value.toLowerCase()
    if (name == pokemon1[cont1]) {
      imagem = "#imgpoke1", feedback = "#feedback1", evol = imgpokemon1[cont1]
      cont1++
      evoluir(imagem, feedback, cont1, evol)
    } else {
      document.querySelector("#feedback1").innerHTML = "Errou &#128555;"
      setTimeout(function() {
        document.querySelector("#feedback1").innerHTML = ""
      }, 2000);
    }
})

sub2.addEventListener('click', function() {
  var name = document.querySelector("#poke2").value.toLowerCase()
    if (name == pokemon2[cont2]) {
      imagem = "#imgpoke2", feedback = "#feedback2", evol = imgpokemon2[cont2]
      cont2++
      evoluir(imagem, feedback, cont2, evol)
    } else {
      document.querySelector("#feedback2").innerHTML = "Errou &#128555;"
      setTimeout(function() {
        document.querySelector("#feedback2").innerHTML = ""
      }, 2000);
    }
})

sub3.addEventListener('click', function() {
  var name = document.querySelector("#poke3").value.toLowerCase()
    if (name == pokemon3[cont3]) {
      imagem = "#imgpoke3", feedback = "#feedback3", evol = imgpokemon3[cont3]
      cont3++
      evoluir(imagem, feedback, cont3, evol)
    } else {
      document.querySelector("#feedback3").innerHTML = "Errou &#128555;"
      setTimeout(function() {
        document.querySelector("#feedback3").innerHTML = ""
      }, 2000);
    }
})

function evoluir(imagem, feedback, contev, evol) {
  img = document.querySelector(imagem)
  if (contev < 3) {
    img.src = evol;
  }
  else if (contev == 3) {
    document.querySelector(feedback).innerHTML = "Parabéns, você acertou todos! &#128513;"
  }
}