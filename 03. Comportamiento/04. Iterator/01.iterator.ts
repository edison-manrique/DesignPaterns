/**
 * Patrón Iterator - Carrito de Compras Iterable
 * 
 * Proporciona una forma de acceder secuencialmente a los elementos de una colección.
 * 
 * Caso de uso: Carrito de compras que permite iterar sobre los productos agregados.
 */

// Carrito de compras iterable
class ShoppingCart implements Iterable<string> {
  private products: string[] = [];

  addProduct(product: string): void {
    this.products.push(product);
  }

  [Symbol.iterator](): Iterator<string> {
    let index = 0;
    const products = this.products;

    return {
      next: (): IteratorResult<string, undefined> => {
        if (index < products.length) {
          const value = products[index]!;
          index++;
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}

// Uso del patrón Iterator
const cart: ShoppingCart = new ShoppingCart();
cart.addProduct('Producto 1');
cart.addProduct('Producto 2');
cart.addProduct('Producto 3');

// Iteración usando for...of
for (const product of cart) {
  console.log(product);
}

// Iteración manual usando el iterator
const iterator: Iterator<string> = cart[Symbol.iterator]();
let currentProduct = iterator.next();

while (!currentProduct.done) {
  console.log(currentProduct.value);
  currentProduct = iterator.next();
}

/**
 * Beneficios del patrón Iterator:
 * - Proporciona acceso uniforme a diferentes colecciones
 * - Oculta la estructura interna de la colección
 * - Permite múltiples iteraciones simultáneas
 */
