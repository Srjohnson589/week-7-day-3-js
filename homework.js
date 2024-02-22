// grabbing form data with .addEventListener()

const my_form = document.querySelector('form')

my_form.addEventListener('submit', (event) => {
    event.preventDefault()
    pokename = event.target[0].value
    pokemonData(pokename)
})


const pokemonData = async (pokename) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        const data = await response.json()
        console.log(data)
        addPoke(data)
    } catch(error) {
        console.error(`there was an error: ${error}`)
    }
}

const addPoke = (data) => {
    const pname = document.querySelector('.pname')
    const pimg = document.querySelector('.pimg')
    pimg.innerHTML =  `
        <img src="${data.sprites.other.home.front_shiny}">
    `
    pname.innerText = `${data.name}`
}