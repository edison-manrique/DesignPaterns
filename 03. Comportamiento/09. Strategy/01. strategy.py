# Comencemos definiendo nuestra clase ShippingCalculator que actuará como el contexto que utiliza el patrón Strategy:
class ShippingCalculator:
    def __init__(self, strategy):
        self.strategy = strategy

    def set_strategy(self, strategy):
        self.strategy = strategy

    def calculate(self, package):
        return self.strategy.calculate(package)

# Ahora, definamos nuestras clases de estrategia que representarán las diferentes estrategias de envío:
class GroundShippingStrategy:
    def calculate(self, package):
        # Cálculo del costo de envío terrestre
        return package['weight'] * 1.5

class AirShippingStrategy:
    def calculate(self, package):
        # Cálculo del costo de envío aéreo
        return package['weight'] * 3

class SeaShippingStrategy:
    def calculate(self, package):
        # Cálculo del costo de envío marítimo
        return package['weight'] * 2

# Ahora, veamos cómo utilizar el patrón Strategy en nuestra aplicación de envío de paquetes:
package = {
    'weight': 10
}

calculator = ShippingCalculator(GroundShippingStrategy())
print(calculator.calculate(package))  # 15

calculator.set_strategy(AirShippingStrategy())
print(calculator.calculate(package))  # 30

calculator.set_strategy(SeaShippingStrategy())
print(calculator.calculate(package))  # 20