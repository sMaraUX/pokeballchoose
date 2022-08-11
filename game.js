//CLASE POKEMON
class Pokemon {
    constructor(nombre, vida, ataque1, ataque2) {
      this.nombre = nombre
      this.vida = vida
      this.ataque = ataque1
      this.ataque2 = ataque2
    }
    //METODO BATALLA
  }
  
  //CLASES HIJAS: Pokemons disponibles
  
  class Pikachu extends Pokemon {
    constructor(nombre, vida, ataque, ataque2) {
      super(nombre, vida, ataque, ataque2)
    }
  }
  class Charmander extends Pokemon {
    constructor(nombre, vida, ataque, ataque2) {
      super(nombre, vida, ataque, ataque2)
    }
  }
  class Squirtle extends Pokemon {
    constructor(nombre, vida, ataque, ataque2) {
      super(nombre, vida, ataque, ataque2)
    }
  }
  class Bulbasaur extends Pokemon {
    constructor(nombre, vida, ataque, ataque2) {
      super(nombre, vida, ataque, ataque2)
    }
  }
  
  // ataques y daños
  
  const impactTrueno = 230
  const rayo = 300
  const lanzallamas = 230
  const ascuas = 120
  const pistoladeAgua = 210
  const burbujas = 150
  const latigazo = 200
  const latigoCepa = 60
  
  
  // GENERANDO POKEMONS
  
  const pikachu = new Pikachu("Pikachu", 1350, impactTrueno, rayo)
  const charmander = new Charmander("Charmander", 1260, lanzallamas, ascuas)
  const squirtle = new Squirtle("Squirtle", 1250, pistoladeAgua, burbujas)
  const bulbasaur = new Bulbasaur("Bulbasaur", 1210, latigazo, latigoCepa)

  ////////////////////////////////////////////////////////////////////////
/////////////////////////// nuevo juego ////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

function abrir_1(){
    pokeballpikachu = document.getElementById("pokebola1")
    pokeballpikachu.classList.toggle("pokebola1_close")
    pokeballpikachu.classList.toggle("pokebola1_open")
    }
function abrir_2(){

    pokeballcharmander = document.getElementById("pokebola2")
    pokeballcharmander.classList.toggle("pokebola2_close")
    pokeballcharmander.classList.toggle("pokebola2_open")
    }

function abrir_3(){
    pokeballsquirtle = document.getElementById("pokebola3")
    pokeballsquirtle.classList.toggle("pokebola3_close")
    pokeballsquirtle.classList.toggle("pokebola3_open")
    }
    
function abrir_4(){
    
    pokeballbulbasaur = document.getElementById("pokebola4")
    pokeballbulbasaur.classList.toggle("pokebola4_close")
    pokeballbulbasaur.classList.toggle("pokebola4_open")
    }









// const pokebola1 = document.querySelector("#pokebola1")


// pokebola1.addEventListener('click', () => {
//     pokebola1.removeChild(pokebola1);
// })