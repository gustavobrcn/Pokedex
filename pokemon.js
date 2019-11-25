class Pokemon { 
    constructor(pokemonName) {
      this.queryPokemonAPI(pokemonName).then(pokemon => {
        this.name = data.name
        this.hp = data.stats[5].base_stat
        this.atk = data.stats[4].base_stat
        this.def = data.stats[3].base_stat
        this.abilities = [data.abalities[0].ability.name, data.abalities[1].ability.name]
        this.priority = null
        this.power = null
        this.accuracy = null
        this.image = null
      });
    }
  
    addAbilities(array) {
      this.abilites = [...array]
  
    }
  
    static queryPokemonAPI = async (id) => {
      const data = await fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
        .then(res => res.json())
        .catch(error => {
          return fetch(`https://fizal.me/pokeapi/api/v2/name/${id}.json`)
            .then(res => res.json())
        });
      console.log(data)
          
      return data;
  
    
    
  
    }
}

  