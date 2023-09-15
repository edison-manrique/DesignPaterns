// Definimos una clase base
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Método común para todos los animales
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  // Creamos una instancia de Animal
  const animal = new Animal("Lion", 5);
  animal.eat(); // Output: Lion is eating.
  
  // Creamos una subclase usando el patrón de prototipo
  class Lion extends Animal {
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
  
    // Método específico para los leones
    roar() {
      console.log(`${this.name} is roaring.`);
    }
  }
  
  // Creamos una instancia de Lion
  const lion = new Lion("Simba", 3, "golden");
  lion.eat(); // Output: Simba is eating.
  lion.roar(); // Output: Simba is roaring.