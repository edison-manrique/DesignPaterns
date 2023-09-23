# Comencemos definiendo nuestra clase base Vehicle que representa un vehículo:
class Vehicle:
    def __init__(self):
        self.make = ""
        self.model = ""

    def clone(self):
        raise NotImplementedError("El método clone() debe ser implementado por las subclases.")

    def get_info(self):
        return f"Vehículo: {self.make} {self.model}"

# A continuación, definimos nuestras clases concretas que extienden la clase base Vehicle:
class Car(Vehicle):
    def __init__(self, make, model):
        super().__init__()
        self.make = make
        self.model = model

    def clone(self):
        return self.__class__(self.make, self.model)

class Motorcycle(Vehicle):
    def __init__(self, make, model):
        super().__init__()
        self.make = make
        self.model = model

    def clone(self):
        return self.__class__(self.make, self.model)

# Ahora podemos utilizar el patrón Prototype para clonar vehículos existentes:
car_prototype = Car("Toyota", "Corolla")
cloned_car = car_prototype.clone()

print(cloned_car.get_info()) # Vehículo: Toyota Corolla

motorcycle_prototype = Motorcycle("Honda", "CBR500R")
cloned_motorcycle = motorcycle_prototype.clone()

print(cloned_motorcycle.get_info()) # Vehículo: Honda CBR500R