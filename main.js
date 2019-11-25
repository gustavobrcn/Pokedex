const startBtn = document.getElementById('start-btn')
const trainerForm = document.getElementById('trainer-form')
const pokemonForm = document.getElementById('pokemon-form')
let trainer

startBtn.addEventListener('click', () => {
  trainerForm.style.display = 'block'
})


trainerForm.addEventListener('submit', () => {
  const name = document.getElementById('trainer-input').value
  trainer = new Trainer(name)
})

pokemonForm.addEventListener('submit', () => {
  const pokemonName =  document.getElementById('pokemon-input').value
  const pokemon = new Pokemon(pokemonName)
  trainer.addPokemon(pokemon)
})

// make pokemon form set ID for input as pokemon-input