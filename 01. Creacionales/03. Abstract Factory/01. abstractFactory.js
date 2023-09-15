/***

Imaginemos que estamos construyendo una aplicación de compras en línea y necesitamos manejar diferentes 
tipos de productos de supermercado, como alimentos, productos de limpieza y artículos de cuidado personal. 
Cada tipo de producto tiene diferentes variantes, como diferentes marcas o tamaños.

Aquí es donde el patrón Abstract Factory puede ser útil. 
Podemos utilizar el patrón Abstract Factory para proporcionar una interfaz común para crear diferentes familias
 de productos relacionados, como alimentos, productos de limpieza y artículos de cuidado personal, 
 y luego implementar fábricas concretas para cada familia de productos.

*/

// Comencemos definiendo nuestra interfaz común para los productos de supermercado:

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        throw new Error("Método getInfo() debe ser implementado por las subclases.");
    }
}

// A continuación, definimos nuestras clases concretas que implementan la interfaz Product para cada tipo de producto:

class FoodProduct extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }

    getInfo() {
        return `Alimento: ${this.name} - Marca: ${this.brand} - Precio: ${this.price}`;
    }
}

class CleaningProduct extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getInfo() {
        return `Producto de limpieza: ${this.name} - Tamaño: ${this.size} - Precio: ${this.price}`;
    }
}

class PersonalCareProduct extends Product {
    constructor(name, price, type) {
        super(name, price);
        this.type = type;
    }

    getInfo() {
        return `Artículo de cuidado personal: ${this.name} - Tipo: ${this.type} - Precio: ${this.price}`;
    }
}

// Luego, definimos nuestra fábrica abstracta ProductFactory que proporciona métodos para crear diferentes tipos de productos:

class ProductFactory {
    createFoodProduct(name, price, brand) {
        throw new Error("Método createFoodProduct() debe ser implementado por las subclases.");
    }

    createCleaningProduct(name, price, size) {
        throw new Error("Método createCleaningProduct() debe ser implementado por las subclases.");
    }

    createPersonalCareProduct(name, price, type) {
        throw new Error("Método createPersonalCareProduct() debe ser implementado por las subclases.");
    }
}

// Finalmente, implementamos fábricas concretas que extienden la fábrica abstracta ProductFactory para cada familia de productos:

class SupermarketAFactory extends ProductFactory {
    createFoodProduct(name, price, brand) {
        return new FoodProduct(name, price, brand);
    }

    createCleaningProduct(name, price, size) {
        return new CleaningProduct(name, price, size);
    }

    createPersonalCareProduct(name, price, type) {
        return new PersonalCareProduct(name, price, type);
    }
}

class SupermarketBFactory extends ProductFactory {
    createFoodProduct(name, price, brand) {
        return new FoodProduct(name, price, brand);
    }

    createCleaningProduct(name, price, size) {
        return new CleaningProduct(name, price, size);
    }

    createPersonalCareProduct(name, price, type) {
        return new PersonalCareProduct(name, price, type);
    }
}

// Ahora podemos utilizar el patrón Abstract Factory para crear diferentes productos de supermercado utilizando la fábrica correspondiente:

const supermarketAFactory = new SupermarketAFactory();
const foodProductA = supermarketAFactory.createFoodProduct("Arroz", 2.99, "Marca A");
console.log(foodProductA.getInfo()); // Alimento: Arroz - Marca: Marca A - Precio: 2.99

const supermarketBFactory = new SupermarketBFactory();
const cleaningProductB = supermarketBFactory.createCleaningProduct("Detergente", 1.99, "500ml");
console.log(cleaningProductB.getInfo()); // Producto de limpieza: Detergente - Tamaño: 500ml - Precio: 1.99

const personalCareProductB = supermarketBFactory.createPersonalCareProduct("Jabón", 0.99, "Barra");
console.log(personalCareProductB.getInfo());

/***

Ahora hemos utilizado el patrón Abstract Factory para crear diferentes productos de supermercado utilizando 
las fábricas correspondientes. Esto nos permite crear fácilmente productos de diferentes familias 
sin preocuparnos por los detalles de implementación de cada uno.

*/