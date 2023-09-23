from abc import ABC, abstractmethod

# Comencemos definiendo nuestra interfaz común para los productos de supermercado:
class Product(ABC):
    def __init__(self, name, price):
        self.name = name
        self.price = price

    @abstractmethod
    def get_info(self):
        pass

# A continuación, definimos nuestras clases concretas que implementan la interfaz Product para cada tipo de producto:
class FoodProduct(Product):
    def __init__(self, name, price, brand):
        super().__init__(name, price)
        self.brand = brand

    def get_info(self):
        return f"Alimento: {self.name} - Marca: {self.brand} - Precio: {self.price}"

class CleaningProduct(Product):
    def __init__(self, name, price, size):
        super().__init__(name, price)
        self.size = size

    def get_info(self):
        return f"Producto de limpieza: {self.name} - Tamaño: {self.size} - Precio: {self.price}"

class PersonalCareProduct(Product):
    def __init__(self, name, price, type):
        super().__init__(name, price)
        self.type = type

    def get_info(self):
        return f"Artículo de cuidado personal: {self.name} - Tipo: {self.type} - Precio: {self.price}"

# Luego, definimos nuestra fábrica abstracta ProductFactory que proporciona métodos para crear diferentes tipos de productos:
class ProductFactory(ABC):
    @abstractmethod
    def create_food_product(self, name, price, brand):
        pass

    @abstractmethod
    def create_cleaning_product(self, name, price, size):
        pass

    @abstractmethod
    def create_personal_care_product(self, name, price, type):
        pass

# Finalmente, implementamos fábricas concretas que extienden la fábrica abstracta ProductFactory para cada familia de productos:
class SupermarketAFactory(ProductFactory):
    def create_food_product(self, name, price, brand):
        return FoodProduct(name, price, brand)

    def create_cleaning_product(self, name, price, size):
        return CleaningProduct(name, price, size)

    def create_personal_care_product(self, name, price, type):
        return PersonalCareProduct(name, price, type)

class SupermarketBFactory(ProductFactory):
    def create_food_product(self, name, price, brand):
        return FoodProduct(name, price, brand)

    def create_cleaning_product(self, name, price, size):
        return CleaningProduct(name, price, size)

    def create_personal_care_product(self, name, price, type):
        return PersonalCareProduct(name, price, type)

# Ahora podemos utilizar el patrón Abstract Factory para crear diferentes productos de supermercado utilizando la fábrica correspondiente:
supermarket_a_factory = SupermarketAFactory()
food_product_a = supermarket_a_factory.create_food_product("Arroz", 2.99, "Marca A")
print(food_product_a.get_info()) # Alimento: Arroz - Marca: Marca A - Precio: 2.99

supermarket_b_factory = SupermarketBFactory()
cleaning_product_b = supermarket_b_factory.create_cleaning_product("Detergente", 1.99, "500ml")
print(cleaning_product_b.get_info()) # Producto de limpieza: Detergente - Tamaño: 500ml - Precio: 1.99

personal_care_product_b = supermarket_b_factory.create_personal_care_product("Jabón", 0.99, "Barra")
print(personal_care_product_b.get_info())