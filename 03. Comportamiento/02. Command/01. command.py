# Definimos nuestra clase base Command que representa un comando
class Command:
    def execute(self):
        raise NotImplementedError("El método execute() debe ser implementado por las subclases.")

# Definimos nuestras clases concretas que extienden la clase base Command
class TurnOnCommand(Command):
    def __init__(self, device):
        self.device = device

    def execute(self):
        self.device.turn_on()

class TurnOffCommand(Command):
    def __init__(self, device):
        self.device = device

    def execute(self):
        self.device.turn_off()

class SetTemperatureCommand(Command):
    def __init__(self, device, temperature):
        self.device = device
        self.temperature = temperature

    def execute(self):
        self.device.set_temperature(self.temperature)

# ... otras clases de comandos como AdjustVolumeCommand, ChangeChannelCommand, etc.

# Utilizamos el patrón Command para enviar y ejecutar comandos en los dispositivos
class Device:
    def __init__(self, name):
        self.name = name
        self.is_on = False
        self.temperature = 0

    def turn_on(self):
        self.is_on = True
        print(f"{self.name} se ha encendido.")

    def turn_off(self):
        self.is_on = False
        print(f"{self.name} se ha apagado.")

    def set_temperature(self, temperature):
        self.temperature = temperature
        print(f"{self.name} se ha ajustado a {temperature} grados.")

tv = Device("Televisor")
ac = Device("Aire acondicionado")

turn_on_tv_command = TurnOnCommand(tv)
turn_off_ac_command = TurnOffCommand(ac)
set_temperature_ac_command = SetTemperatureCommand(ac, 25)

turn_on_tv_command.execute() # Televisor se ha encendido.
turn_off_ac_command.execute() # Aire acondicionado se ha apagado.
set_temperature_ac_command.execute() # Aire acondicionado se ha ajustado a 25 grados.