let startBtn = document.getElementById('start-btn')
let trainerForm = document.getElementById('trainer-form')

startBtn.addEventListener('click', () => {
  trainerForm.style.display = 'block'
})


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

class Pokemon { //things i need for each pokemon
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

  queryPokemonAPI = async (type, id) => {
    const query = type === 'id' ? `id/${id}` : `name/${id}`
    const data = await fetch(`https://fizal.me/pokeapi/api/v2/${query}`)
      .then(res => res.json())
      console.log({ data })
    }
}

  // this will print {data: 'actual data'}
    // equivalent to...
    // let q = '';
    // if (type === 'id')
    //   q = `id/${id}`;
    // else
    //   q = `name/${id}`;

    // This is asynchronous, meaning the line under it will execute first.
    // Unless, you`await` it
    // const response = await fetch(`https://fizal.me/pokeapi/api/v2/${query}`)
    // const data = await response.json() // You're right, .json() also returns a Promise

    // `fetch` returns a `Promise`
    // a Promise has a method called `then` which you can pass a function to.
    // The function you give it, will be executed when the `Promise` `resolves`.
    // Since the function I gave it returns `res.json`,
    // that's what will be the value in `response`
    // This allows you to not have middleman variables like you have.
      // Even though `res.json()` returns a  promise, the `await` still works on it

    // I watched something some time ago that said you should log things as object
    // so you have a label for the output instead of just some random printing.
    // the above is a shortcut for {data: data}


    // log `data` so you know what's in it

let blaziken = new Pokemon ('Blaziken')
let red = new Trainer ('Red')
let moves = ['flame thrower', 'blaze kick', 'quick attack']
