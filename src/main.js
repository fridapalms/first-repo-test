import './style.css'

class Animal { // skapar en klass som mall för alla djur
  species;
  name;
  color;
  imageUrl;

  constructor(species, name, color, imageUrl) { 
    this.species = species;
    this.name = name;
    this.color = color;
    this.imageUrl = imageUrl;
  }
}

const panda = new Animal("panda", "Bob", "black and white", "/src/panda.jpg"); //använder klassen för att skapa alla djur
const zebra = new Animal ("zebra", "Jodie", "black and white stripes", "/src/zebra.jpg");
const elephant = new Animal ("elephant", "Clara", "grey", "/src/elephant.jpg");
const lion = new Animal ("lion", "Chester", "beige", "/src/lion.jpg");
const parrot = new Animal ("parrot", "Elisa", "rainbow colored", "/src/parrot.jpg");

const zoo = [panda, zebra, elephant, lion, parrot] //lägger alla djur i en lista

zoo.forEach((animal) => { //skapar en loop som skapar html för varje djur
  const app = document.getElementById("app"); //hämtar div med id:t app
  const div = document.createElement("div"); // skapar en till div
  div.className = "card"; //ger den diven className card för att kunna lägga css på diven

  const species = document.createElement("h2"); //skapar en h2-tagg för art-namnet
  const name = document.createElement("h2"); // skapar en h2-tagg för djurets namn
  const color = document.createElement("p"); // skapar en p-tagg för djurets färg
  const img = document.createElement("img"); // skapar en img-tagg för djurets bild
  img.className = "pictures"; // ger img className pictures

  species.innerHTML = "Species: " + animal.species; //skriver ut art-namnet i h2-taggen
  name.innerHTML = "Name: " + animal.name; //skriver ut djurets namn i den andra h2-taggen
  color.innerHTML = "Color: " + animal.color; //skriver ut djurets färg i p-taggen
  img.src = animal.imageUrl; //ger img-taggen src-attributet med djurets url
  img.alt = "animal picture";//ger img-taggen alt-attributet 

  div.appendChild(species); //lägger h2-taggen i diven
  div.appendChild(name); //lägger h2-taggen i diven
  div.appendChild(color); //lägger p-taggen i diven
  div.appendChild(img); // lägger img taggen i diven
  app.appendChild(div); //lägger diven i app-diven

});