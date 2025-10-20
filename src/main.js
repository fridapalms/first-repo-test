import './style.css'

class Animal {
  species;
  name;
  color;

  constructor(species, name, color) {
    this.species = species;
    this.name = name;
    this.color = color;
  }
}

const panda = new Animal("panda", "Bob", "black and white");
const zebra = new Animal ("zebra", "Jodie", "black and white stripes");
const elephant = new Animal ("elephant", "Clara", "grey");
const lion = new Animal ("lion", "Chester", "beige");
const parrot = new Animal ("parrot", "Elisa", "rainbow colored");

const zoo = [panda, zebra, elephant, lion, parrot]