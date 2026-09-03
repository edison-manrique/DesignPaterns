/**
 * Patrón Abstract Factory - Fábrica de Productos de Supermercado
 * 
 * Proporciona una interfaz para crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 * 
 * Caso de uso: Aplicación de compras en línea con diferentes tipos de productos
 * (alimentos, limpieza, cuidado personal) y diferentes supermercados.
 */

// Interfaz común para productos
interface Product {
  name: string;
  price: number;
  getInfo(): string;
}

// Producto concreto: Alimento
class FoodProduct implements Product {
  constructor(
    public name: string,
    public price: number,
    public brand: string
  ) {}

  getInfo(): string {
    return `Alimento: ${this.name} - Marca: ${this.brand} - Precio: ${this.price}`;
  }
}

// Producto concreto: Limpieza
class CleaningProduct implements Product {
  constructor(
    public name: string,
    public price: number,
    public size: string
  ) {}

  getInfo(): string {
    return `Producto de limpieza: ${this.name} - Tamaño: ${this.size} - Precio: ${this.price}`;
  }
}

// Producto concreto: Cuidado Personal
class PersonalCareProduct implements Product {
  constructor(
    public name: string,
    public price: number,
    public type: string
  ) {}

  getInfo(): string {
    return `Artículo de cuidado personal: ${this.name} - Tipo: ${this.type} - Precio: ${this.price}`;
  }
}

// Fábrica abstracta
interface ProductFactory {
  createFoodProduct(name: string, price: number, brand: string): Product;
  createCleaningProduct(name: string, price: number, size: string): Product;
  createPersonalCareProduct(name: string, price: number, type: string): Product;
}

// Fábrica concreta: Supermercado A
class SupermarketAFactory implements ProductFactory {
  createFoodProduct(name: string, price: number, brand: string): Product {
    return new FoodProduct(name, price, brand);
  }

  createCleaningProduct(name: string, price: number, size: string): Product {
    return new CleaningProduct(name, price, size);
  }

  createPersonalCareProduct(name: string, price: number, type: string): Product {
    return new PersonalCareProduct(name, price, type);
  }
}

// Fábrica concreta: Supermercado B
class SupermarketBFactory implements ProductFactory {
  createFoodProduct(name: string, price: number, brand: string): Product {
    return new FoodProduct(name, price, brand);
  }

  createCleaningProduct(name: string, price: number, size: string): Product {
    return new CleaningProduct(name, price, size);
  }

  createPersonalCareProduct(name: string, price: number, type: string): Product {
    return new PersonalCareProduct(name, price, type);
  }
}

// Uso del patrón Abstract Factory
const supermarketAFactory: ProductFactory = new SupermarketAFactory();
const foodProductA = supermarketAFactory.createFoodProduct('Arroz', 2.99, 'Marca A');
console.log(foodProductA.getInfo()); // Alimento: Arroz - Marca: Marca A - Precio: 2.99

const supermarketBFactory: ProductFactory = new SupermarketBFactory();
const cleaningProductB = supermarketBFactory.createCleaningProduct('Detergente', 1.99, '500ml');
console.log(cleaningProductB.getInfo()); // Producto de limpieza: Detergente - Tamaño: 500ml - Precio: 1.99

const personalCareProductB = supermarketBFactory.createPersonalCareProduct('Jabón', 0.99, 'Barra');
console.log(personalCareProductB.getInfo());

/**
 * Beneficios del patrón Abstract Factory:
 * - Garantiza compatibilidad entre productos de una misma familia
 * - Facilita el intercambio de familias de productos
 * - Promueve el principio de inversión de dependencias
 */
