let startBtn = document.getElementById('start-btn')
let trainerForm = document.getElementById('trainer-form')

startBtn.addEventListener('click', () => {
  trainerForm.style.opacity = 1
})

queryPokemonAPI = ()=> {

}

class Trainer {
  constructor(name) {
    this.name = name
    this.pokemon = []
  }
  addPokemon(pokemon) {
    this.pokemon.push(pokemon)
    return `You added ${pokemon.name} to your team!`
  }

  all() {
    return this.pokemon
  }

  get(name) {
    return name
  }
}

class Pokemon {
  constructor(name) {
    this.name = name
    this.hp = null
    this.atk = null
    this.def = null
    this.abilities = []
    this.priority = null
    this.power = null
    this.accuracy = null
  }

  addAbilities(array) {
    this.abilites = [...array]
  }
}

let blaziken = new Pokemon ('Blaziken')
let red = new Trainer ('Red')
let moves = ['flame thrower', 'blaze kick', 'quick attack']
