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
    this.hp =
    this.atk =
    this.def =
    this.abilities = []
  }
}



let blazakin = new Pokemon('Blazakin')
let squirtle = new Pokemon('Squirtle')
let zapdos = new Pokemon('Zapdos')
let arcticuno = new Pokemon('Arcticuno')
let red = new Trainer('Red')
