const startBtn = document.getElementById('start-btn')
const trainerForm = document.getElementById('trainer-form')
const pokemonForm = document.getElementById('pokemon-form')
const trainerIcon = document.getElementById('trainer-icons')
const selectedTrainer = document.getElementsByClassName('trainers')
let trainer

startBtn.addEventListener('click', () => {
  trainerForm.style.display = 'block'
})


trainerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('trainer-input').value
  trainer = new Trainer(name)
  trainerForm.style.display = 'none'
  trainerIcon.style.display = 'block'
})

pokemonForm.addEventListener('submit', () => {
  const pokemonName =  document.getElementById('pokemon-input').value
  const pokemon = new Pokemon(pokemonName)
  trainer.addPokemon(pokemon)
})

// make pokemon form set ID for input as pokemon-input
