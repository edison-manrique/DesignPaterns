# Definimos nuestro subsistema de inventario
class InventorySystem:
    def check_availability(self, item):
        print(f"Verificando disponibilidad de {item} en inventario...")
        # Lógica para verificar la disponibilidad en el inventario
        return True

# Definimos nuestro subsistema de carrito de compras
class ShoppingCart:
    def add_item(self, item):
        print(f"Agregando {item} al carrito de compras...")
        # Lógica para agregar un elemento al carrito de compras

    def remove_item(self, item):
        print(f"Eliminando {item} del carrito de compras...")
        # Lógica para eliminar un elemento del carrito de compras

# Definimos nuestro subsistema de procesamiento de pagos
class PaymentProcessor:
    def process_payment(self, amount):
        print(f"Procesando pago de {amount}...")
        # Lógica para procesar el pago
        return True

# Definimos nuestra fachada que envuelve los subsistemas
class PurchaseFacade:
    def __init__(self):
        self.inventory_system = InventorySystem()
        self.shopping_cart = ShoppingCart()
        self.payment_processor = PaymentProcessor()

    def purchase_item(self, item, amount):
        if self.inventory_system.check_availability(item):
            self.shopping_cart.add_item(item)
            if self.payment_processor.process_payment(amount):
                print(f"Compra exitosa: {item}")
            else:
                print("Error al procesar el pago")
        else:
            print("El artículo no está disponible en inventario")

# Utilizamos el patrón Facade para realizar una compra de manera simplificada
purchase_facade = PurchaseFacade()
purchase_facade.purchase_item("iPhone", 1000)