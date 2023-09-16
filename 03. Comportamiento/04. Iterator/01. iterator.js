/***

Imaginemos que tenemos un objeto llamado ShoppingCart que representa un carrito de compras en una tienda en línea. 
Queremos implementar un iterador que nos permita recorrer los productos agregados al carrito de manera secuencial.

Aquí es donde el patrón Iterator puede ser útil. Podemos utilizar el patrón Iterator para definir una interfaz común 
para recorrer elementos de una colección sin exponer su estructura interna.

*/

// Comencemos definiendo nuestra clase ShoppingCart que implementa la interfaz Iterable:

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index < this.products.length) {
                    const product = this.products[index];
                    index++;
                    return { value: product, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

/***

En este ejemplo, la clase ShoppingCart tiene un método addProduct(product) que nos permite agregar productos al carrito. 
Además, implementamos el método [Symbol.iterator]() que devuelve un objeto iterador con un método next().

*/

// Ahora podemos utilizar el patrón Iterator para recorrer los productos del carrito:

const cart = new ShoppingCart();
cart.addProduct("Producto 1");
cart.addProduct("Producto 2");
cart.addProduct("Producto 3");

const iterator = cart[Symbol.iterator]();
let currentProduct = iterator.next();

while (!currentProduct.done) {
    console.log(currentProduct.value);
    currentProduct = iterator.next();
}

/***

En este ejemplo, creamos una instancia de ShoppingCart y agregamos algunos productos al carrito. 
Luego, obtenemos un iterador llamando al método [Symbol.iterator]() en la instancia de ShoppingCart. 
Utilizamos un bucle while para recorrer los productos llamando al método next() en el iterador 
y mostrando el valor de cada producto.

El patrón Iterator nos permite recorrer los elementos de una colección de manera secuencial 
sin tener que conocer los detalles de su implementación interna. 
Esto proporciona una forma estandarizada de iterar sobre los elementos de una colección en JavaScript.

*/