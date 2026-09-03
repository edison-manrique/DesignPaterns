/**
 * Patrón Facade - Sistema de Compras en Línea
 * 
 * Proporciona una interfaz simplificada a un conjunto de interfaces complejas.
 * 
 * Caso de uso: Aplicación de compras en línea con subsistemas de inventario,
 * carrito y procesamiento de pagos.
 */

// Subsistema: Inventario
class InventorySystem {
  checkAvailability(item: string): boolean {
    console.log(`Verificando disponibilidad de ${item} en inventario...`);
    return true;
  }
}

// Subsistema: Carrito de compras (renombrado para evitar conflictos)
class ShoppingCartFacade {
  addItem(item: string): void {
    console.log(`Agregando ${item} al carrito de compras...`);
  }

  removeItem(item: string): void {
    console.log(`Eliminando ${item} del carrito de compras...`);
  }
}

// Subsistema: Procesamiento de pagos
class PaymentProcessor {
  processPayment(amount: number): boolean {
    console.log(`Procesando pago de ${amount}...`);
    return true;
  }
}

// Fachada que simplifica la interfaz
class PurchaseFacade {
  private inventorySystem: InventorySystem = new InventorySystem();
  private shoppingCart: ShoppingCartFacade = new ShoppingCartFacade();
  private paymentProcessor: PaymentProcessor = new PaymentProcessor();

  purchaseItem(item: string, amount: number): void {
    if (this.inventorySystem.checkAvailability(item)) {
      this.shoppingCart.addItem(item);
      if (this.paymentProcessor.processPayment(amount)) {
        console.log(`Compra exitosa: ${item}`);
      } else {
        console.log('Error al procesar el pago');
      }
    } else {
      console.log('El artículo no está disponible en inventario');
    }
  }
}

// Uso del patrón Facade
const purchaseFacade: PurchaseFacade = new PurchaseFacade();
purchaseFacade.purchaseItem('iPhone', 1000);

/**
 * Beneficios del patrón Facade:
 * - Simplifica la interfaz para el cliente
 * - Reduce el acoplamiento entre componentes
 * - Facilita el mantenimiento y pruebas
 */
