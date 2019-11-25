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