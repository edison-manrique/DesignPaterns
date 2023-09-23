# Comencemos definiendo nuestra clase base Beverage que actuará como el template para preparar las bebidas:
class Beverage:
    def prepare(self):
        self.boil_water()
        self.brew()
        self.pour()
        self.add_condiments()

    def boil_water(self):
        print("Hirviendo agua...")

    def brew(self):
        raise NotImplementedError("El método brew debe ser implementado por las clases hijas.")

    def pour(self):
        print("Vertiendo en la taza...")

    def add_condiments(self):
        raise NotImplementedError("El método add_condiments debe ser implementado por las clases hijas.")

# Ahora, definamos nuestras clases hijas que representarán los diferentes tipos de bebidas:
class Coffee(Beverage):
    def brew(self):
        print("Preparando café...")

    def add_condiments(self):
        print("Añadiendo azúcar y leche al café...")

class Tea(Beverage):
    def brew(self):
        print("Preparando té...")

    def add_condiments(self):
        print("Añadiendo limón al té...")

class HotChocolate(Beverage):
    def brew(self):
        print("Preparando chocolate caliente...")

    def add_condiments(self):
        print("Añadiendo malvaviscos al chocolate caliente...")

# Ahora, veamos cómo utilizar el patrón Template Method para preparar bebidas:
coffee = Coffee()
coffee.prepare()
# Hirviendo agua...
# Preparando café...
# Vertiendo en la taza...
# Añadiendo azúcar y leche al café...

tea = Tea()
tea.prepare()
# Hirviendo agua...
# Preparando té...
# Vertiendo en la taza...
# Añadiendo limón al té...

hot_chocolate = HotChocolate()
hot_chocolate.prepare()
# Hirviendo agua