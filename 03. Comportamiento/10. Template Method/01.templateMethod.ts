/**
 * Patrón Template Method - Preparación de Bebidas
 * 
 * Define el esqueleto de un algoritmo y delega los pasos a subclases.
 * 
 * Caso de uso: Aplicación de creación de bebidas (Café, Té, Chocolate caliente)
 * con una estructura común de preparación.
 */

// Clase base que define el template
abstract class Beverage {
  // Método template que define la estructura del algoritmo
  prepare(): void {
    this.boilWater();
    this.brew();
    this.pour();
    this.addCondiments();
  }

  boilWater(): void {
    console.log('Hirviendo agua...');
  }

  pour(): void {
    console.log('Vertiendo en la taza...');
  }

  abstract brew(): void;
  abstract addCondiments(): void;
}

// Implementación concreta: Café
class Coffee extends Beverage {
  brew(): void {
    console.log('Preparando café...');
  }

  addCondiments(): void {
    console.log('Añadiendo azúcar y leche al café...');
  }
}

// Implementación concreta: Té
class Tea extends Beverage {
  brew(): void {
    console.log('Preparando té...');
  }

  addCondiments(): void {
    console.log('Añadiendo limón al té...');
  }
}

// Implementación concreta: Chocolate caliente
class HotChocolate extends Beverage {
  brew(): void {
    console.log('Preparando chocolate caliente...');
  }

  addCondiments(): void {
    console.log('Añadiendo malvaviscos al chocolate caliente...');
  }
}

// Uso del patrón Template Method
const coffee: Beverage = new Coffee();
coffee.prepare();
// Hirviendo agua...
// Preparando café...
// Vertiendo en la taza...
// Añadiendo azúcar y leche al café...

const tea: Beverage = new Tea();
tea.prepare();
// Hirviendo agua...
// Preparando té...
// Vertiendo en la taza...
// Añadiendo limón al té...

const hotChocolate: Beverage = new HotChocolate();
hotChocolate.prepare();
// Hirviendo agua...
// Preparando chocolate caliente...
// Vertiendo en la taza...
// Añadiendo malvaviscos al chocolate caliente...

/**
 * Beneficios del patrón Template Method:
 * - Define una estructura común reutilizable
 * - Permite variaciones específicas en subclases
 * - Facilita el mantenimiento del algoritmo base
 */
