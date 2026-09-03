/**
 * Patrón Prototype - Clonación de Vehículos
 * 
 * Permite clonar objetos existentes en lugar de crear nuevos desde cero.
 * 
 * Caso de uso: Aplicación de clonación de vehículos donde se necesitan
 * copias eficientes de objetos con propiedades idénticas.
 */

// Clase base que define el contrato de clonación
abstract class Vehicle {
  protected make: string = '';
  protected model: string = '';

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  abstract clone(): Vehicle;

  getInfo(): string {
    return `Vehículo: ${this.make} ${this.model}`;
  }
}

// Implementación concreta: Automóvil
class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model);
  }

  clone(): Car {
    return Object.create(this);
  }
}

// Implementación concreta: Motocicleta
class Motorcycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model);
  }

  clone(): Motorcycle {
    return Object.create(this);
  }
}

// Uso del patrón Prototype
const carPrototype: Car = new Car('Toyota', 'Corolla');
const clonedCar: Car = carPrototype.clone();
console.log(clonedCar.getInfo()); // Vehículo: Toyota Corolla

const motorcyclePrototype: Motorcycle = new Motorcycle('Honda', 'CBR500R');
const clonedMotorcycle: Motorcycle = motorcyclePrototype.clone();
console.log(clonedMotorcycle.getInfo()); // Vehículo: Honda CBR500R

/**
 * Beneficios del patrón Prototype:
 * - Evita la sobrecarga de crear objetos desde cero
 * - Útil cuando la creación directa es más costosa que la clonación
 * - Permite registrar y recuperar prototipos dinámicamente
 */
