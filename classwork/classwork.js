// connect/test js file to html

// .getElementsByTagName()
const h1_tags = document.getElementsByTagName('h1')
console.log(h1_tags)

// .getElementsByClassName()
const greet_grab = document.getElementsByClassName('greeting')
console.log(greet_grab)

// .getElementById()
const instructors = document.getElementById('tester')
console.log(instructors)

// .querySelector() (ES6 Modern Approach)
// only returns one
let instructor = document.querySelector('#test')
console.log(instructor)

// .querySelectorAll()
let student = document.querySelectorAll('.greeting')
console.log(student)

for (let s of student) {
    console.log(s)
}

// .innerText property: Changes the text

student[0].innerText = 'Rahel'

// .innerHTML property: Allows you to write HTML code

const special = document.getElementById('special_div')
console.log(special)
special.innerHTML = `
    <p>I was created in JS</p>
`
console.log(special)

// .createElement()

const newBtn = document.createElement('button')
newBtn.innerText = 'Thieves'

// NOTE: Rememeber when creating an element in JS, you need to append to your document with .append()
document.body.append(newBtn)
test.append(newBtn)
tester.append(newBtn)

// Javascript is an event driven language
// We can take advantage of its events by using .addEventListener(event_type, callback function)

newBtn.addEventListener('click', () => {
    if (newBtn.className === '') {
        newBtn.className = 'purple'
    } else if (newBtn.className === 'purple') {
        newBtn.className = 'green'
    } else {
        newBtn.className = ''
    }
})


// Option 2: using onclick attribute in HTML
// onclick="function(event)"

const booyah = (event) => {
    console.log('Booyah')
}

// Lets create a new button and append to a specfic div

const button3 = document.createElement('button')
button3.innerText = "BOOM"
console.log(button3)
document.body.append(button3)

// adding addEventListener() to new button to add text every time its clicked

button3.addEventListener('click', () => {
    const p = document.createElement('p')
    p.innerText = 'Boom'
    document.body.append(p)
})

// grabbing form data with .addEventListener()

const my_form = document.querySelector('form')
console.log(my_form)

my_form.addEventListener('submit', (event) => {
    event.preventDefault()
    pokename = event.target[0].value
    pokemonData(pokename)
})

const pokemonData = async (pokename) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        const data = await response.json()
        addPoke(data)
    } catch(error) {
        console.error(`there was an error: ${error}`)
    }
}


const addPoke = (data) => {
    let pokename = document.createElement('p')
    special_div.innerHTML =  `
        <img src="${data.sprites.front_default}">
    `
    pokename.innerText = `${data.name}`
    document.body.append(pokename)
}