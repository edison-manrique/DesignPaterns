# Definimos nuestra clase Flyweight que representa los objetos de color
class Color:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

# Definimos nuestra clase Text que representa una parte del texto
class Text:
    def __init__(self, content, color):
        self.content = content
        self.color = color

    def highlight(self):
        print(f'"{self.content}" resaltado con el color {self.color.get_name()}')

# Creamos un FlyweightFactory que se encargará de crear y almacenar instancias compartidas de Color
class FlyweightFactory:
    def __init__(self):
        self.colors = {}

    def get_color(self, name):
        if name not in self.colors:
            self.colors[name] = Color(name)
        return self.colors[name]

# Utilizamos el patrón Flyweight para resaltar diferentes partes del texto con diferentes colores
flyweight_factory = FlyweightFactory()

text1 = Text("Hola", flyweight_factory.get_color("rojo"))
text1.highlight() # "Hola" resaltado con el color rojo

text2 = Text("Mundo", flyweight_factory.get_color("azul"))
text2.highlight() # "Mundo" resaltado con el color azul

text3 = Text("¡Hola de nuevo!", flyweight_factory.get_color("rojo"))
text3.highlight() # "¡Hola de nuevo!" resaltado con el color rojo