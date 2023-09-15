/***

Imaginemos que estamos construyendo una aplicación de clonación de vehículos. 
Queremos tener un código que nos permita clonar vehículos existentes de manera eficiente, 
en lugar de crear nuevas instancias desde cero.

Aquí es donde el patrón Prototype puede ser útil. 
Podemos utilizar el patrón Prototype para definir un prototipo base de vehículo y luego clonar 
ese prototipo para crear nuevas instancias con propiedades idénticas.

*/

// Comencemos definiendo nuestra clase base Vehicle que representa un vehículo:

class Vehicle {
    constructor() {
      this.make = "";
      this.model = "";
    }
  
    clone() {
      throw new Error("El método clone() debe ser implementado por las subclases.");
    }
  
    getInfo() {
      return `Vehículo: ${this.make} ${this.model}`;
    }
  }

  // A continuación, definimos nuestras clases concretas que extienden la clase base Vehicle:

  class Car extends Vehicle {
    constructor(make, model) {
      super();
      this.make = make;
      this.model = model;
    }
  
    clone() {
      return Object.create(this);
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model) {
      super();
      this.make = make;
      this.model = model;
    }
  
    clone() {
      return Object.create(this);
    }
  }

  // Ahora podemos utilizar el patrón Prototype para clonar vehículos existentes:

  const carPrototype = new Car("Toyota", "Corolla");
const clonedCar = carPrototype.clone();

console.log(clonedCar.getInfo()); // Vehículo: Toyota Corolla

const motorcyclePrototype = new Motorcycle("Honda", "CBR500R");
const clonedMotorcycle = motorcyclePrototype.clone();

console.log(clonedMotorcycle.getInfo()); // Vehículo: Honda CBR500R

/***

En este ejemplo, el patrón Prototype nos permite clonar vehículos existentes utilizando el método clone(). 
Cada instancia clonada tiene las mismas propiedades que el prototipo original, lo que nos permite crear 
nuevos vehículos de manera eficiente.

*/