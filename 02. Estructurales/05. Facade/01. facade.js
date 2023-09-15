/***
 
Imaginemos que estamos construyendo una aplicación de compra en línea. 
Tenemos diferentes subsistemas que manejan diferentes aspectos de la compra, 
como el inventario, el carrito de compras y el procesamiento de pagos. 
Queremos simplificar la interfaz para los clientes y proporcionar una 
única interfaz fácil de usar para realizar una compra.

Aquí es donde el patrón Facade puede ser útil. 
Podemos utilizar el patrón Facade para crear una fachada que envuelva los subsistemas 
y proporcione una interfaz simplificada para realizar una compra.

*/

// Comencemos definiendo nuestros subsistemas:

// Subsistema de inventario
class InventorySystem {
    checkAvailability(item) {
        console.log(`Verificando disponibilidad de ${item} en inventario...`);
        // Lógica para verificar la disponibilidad en el inventario
        return true;
    }
}

// Subsistema de carrito de compras
class ShoppingCart {
    addItem(item) {
        console.log(`Agregando ${item} al carrito de compras...`);
        // Lógica para agregar un elemento al carrito de compras
    }

    removeItem(item) {
        console.log(`Eliminando ${item} del carrito de compras...`);
        // Lógica para eliminar un elemento del carrito de compras
    }
}

// Subsistema de procesamiento de pagos
class PaymentProcessor {
    processPayment(amount) {
        console.log(`Procesando pago de ${amount}...`);
        // Lógica para procesar el pago
        return true;
    }
}

/***
 
A continuación, definimos nuestra fachada que envuelve los subsistemas 
y proporciona una interfaz simplificada para realizar una compra:

*/

class PurchaseFacade {
    constructor() {
        this.inventorySystem = new InventorySystem();
        this.shoppingCart = new ShoppingCart();
        this.paymentProcessor = new PaymentProcessor();
    }

    purchaseItem(item, amount) {
        if (this.inventorySystem.checkAvailability(item)) {
            this.shoppingCart.addItem(item);
            if (this.paymentProcessor.processPayment(amount)) {
                console.log(`Compra exitosa: ${item}`);
            } else {
                console.log(`Error al procesar el pago`);
            }
        } else {
            console.log(`El artículo no está disponible en inventario`);
        }
    }
}

/***

    Finalmente, podemos utilizar el patrón Facade para realizar una compra de manera simplificada:

*/

const purchaseFacade = new PurchaseFacade();
purchaseFacade.purchaseItem("iPhone", 1000);

/*** 

En este ejemplo, el patrón Facade nos permite proporcionar una interfaz simplificada para realizar una compra. 
La fachada envuelve los subsistemas de inventario, carrito de compras y procesamiento de pagos, 
ocultando su complejidad y proporcionando una única interfaz fácil de usar para los clientes.

*/