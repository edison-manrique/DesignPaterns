# Definimos nuestra clase ShoppingCart que implementa la interfaz Iterable
class ShoppingCart:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def __iter__(self):
        index = 0

        def next():
            nonlocal index

            if index < len(self.products):
                product = self.products[index]
                index += 1
                return product
            else:
                raise StopIteration()

        return iter(next, None)

# Utilizamos el patrón Iterator para recorrer los productos del carrito
cart = ShoppingCart()
cart.add_product("Producto 1")
cart.add_product("Producto 2")
cart.add_product("Producto 3")

iterator = iter(cart)

for product in iterator:
    print(product)