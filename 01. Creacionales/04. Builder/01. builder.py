# Comencemos definiendo nuestra clase Pizza que representa una pizza:
class Pizza:
    def __init__(self):
        self.ingredients = []
        self.size = ""

    def add_ingredient(self, ingredient):
        self.ingredients.append(ingredient)

    def set_size(self, size):
        self.size = size

    def get_info(self):
        return f"Pizza {self.size} con ingredientes: {', '.join(self.ingredients)}"

# A continuación, definimos nuestra clase PizzaBuilder que se encargará de construir las pizzas:
class PizzaBuilder:
    def __init__(self):
        self.pizza = Pizza()

    def add_ingredient(self, ingredient):
        self.pizza.add_ingredient(ingredient)
        return self # Retornamos el propio builder para permitir la construcción fluida

    def set_size(self, size):
        self.pizza.set_size(size)
        return self # Retornamos el propio builder para permitir la construcción fluida

    def build(self):
        return self.pizza

# Ahora podemos utilizar el patrón Builder para construir pizzas personalizadas de forma fácil y flexible:
pizza_builder = PizzaBuilder()

pizza = pizza_builder \
    .set_size("Mediana") \
    .add_ingredient("Queso") \
    .add_ingredient("Jamón") \
    .add_ingredient("Champiñones") \
    .build()

print(pizza.get_info()) # Pizza Mediana con ingredientes: Queso, Jamón, Champiñones