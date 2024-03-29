const startBtn = document.getElementById('start-btn')
const trainerForm = document.getElementById('trainer-form')
const pokemonForm = document.getElementById('pokemon-form')
const trainerIcon = document.getElementById('trainer-icons')
const selectedTrainer = document.getElementsByClassName('trainers')
const displayTeam = document.getElementById('display-team')
const pokemonTeam = document.getElementById('pokemon-team')
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
  document.getElementById('trainer-name').innerHTML = `Trainer ${name}'s Team`
})

for (let i = 1 ; i < 9; i++) {
  document.getElementById(`trainer${i}`).addEventListener('click', () => {
    trainerIcon.style.display = 'none'
    trainerImg = document.getElementById(`trainer${i}`).src
    trainer.setIcon(trainerImg)
    document.getElementById('trainer-pic').src = trainerImg
    displayTeam.style.display = 'block'
    startBtn.style.display = 'none'
  })

}
let count = 0
pokemonForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const pokemonName =  document.getElementById('pokemon-input').value
  const pokemon = new Pokemon(pokemonName)
  await pokemon.init()
  trainer.addPokemon(pokemon)
  const image = document.createElement('img')
  image.src = pokemon.image
  image.dataset.index = count++
  pokemonTeam.appendChild(image)

})

pokemonTeam.addEventListener('click', (e) => { //current target is the pokemon team - what the listener is attached to
  console.log(e.target);                       //target is the thing that caused the event (img)
  console.log(e.currentTarget);
  if (e.target != e.currentTarget) {
  const pokemonIndex = e.target.dataset.index
  let pokemon = trainer.all()[pokemonIndex]
  pokemonStats = document.getElementsByClassName('pokemon-info')
  pokemonStats[0].src = pokemon.image
  pokemonStats[1].innerHTML = `Name: ${pokemon.name}`
  pokemonStats[2].innerHTML = `Def: ${pokemon.def}`
  pokemonStats[3].innerHTML = `Abilities: ${pokemon.abilities[0]}, ${pokemon.abilities[1]}`
  pokemonStats[4].innerHTML = `HP: ${pokemon.hp}`
  }
  e.stopPropagation() //
})
