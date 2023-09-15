// Definimos una interfaz para los productos
class Product {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

// Definimos una fábrica abstracta que crea productos
class AbstractFactory {
    createProduct() {
        throw new Error("createProduct debe ser implementado por las subclases");
    }
}

// Implementamos una fábrica concreta que crea productos específicos
class ConcreteFactory extends AbstractFactory {
    createProduct(name) {
        return new Product(name);
    }
}

  // Creamos una instancia de la fábrica concreta
  const factory = new ConcreteFactory();
  
  // Usamos la fábrica para crear productos
  const product1 = factory.createProduct("Producto 1");
  const product2 = factory.createProduct("Producto 2");
  
  console.log(product1.getName()); // Producto 1
  console.log(product2.getName()); // Producto 2