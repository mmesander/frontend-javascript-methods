/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

const word = "zoetsappig";
console.log(word.length);


/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

console.log("Opdracht 1:")
console.log("---------------------")

const fruit = "Banaan";
const vegetable = "Aardappel";

console.log(fruit.length > vegetable.length)

console.log("---------------------")
console.log(" ")

/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

console.log("Opdracht 2:")
console.log("---------------------")

const lastFruit = fruit.length - 1
const lastVegetable = vegetable.length - 1

console.log(fruit.substring(lastFruit))
console.log(vegetable.substring(lastVegetable))


console.log("---------------------")
console.log(" ")

/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

console.log("Opdracht 3:")
console.log("---------------------")

const userInput = "  De kat krabt de krullen van de trap ";
console.log(userInput.trim())

console.log("---------------------")
console.log(" ")

/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

console.log("Opdracht 4:")
console.log("---------------------")

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"
console.log(story.includes("Fantastisch"))

console.log("---------------------")
console.log(" ")

/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."

console.log("Opdracht 5:")
console.log("---------------------")

console.log(story.indexOf("."))
console.log(story.substring(0, 51))

console.log("---------------------")
console.log(" ")

/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";

console.log("Opdracht 6:")
console.log("---------------------")

const newPrice = price.replace("$", "€").replace(".", ",")
console.log(newPrice)

console.log("---------------------")
console.log(" ")



