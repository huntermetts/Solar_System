const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(planet => {
    let planetEl = document.querySelector("#planets")
    let planetTemp = 
    `<div>${planet}</div>`
    planetEl.innerHTML += planetTemp
    return planetTemp
})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalizedPlanets = planets.map(planet => {
    console.log(planet.charAt(0).toUpperCase() + planet.substr(1));
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

// ALL PLANETS WITH AN E WILL BE IN ALL CAPS
const planetsWithAnE = planets.filter(planet => {
    if (planet.includes("e") === true){
        console.log(planet.toUpperCase())
    }
})