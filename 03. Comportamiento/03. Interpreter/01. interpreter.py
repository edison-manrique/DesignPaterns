# Definimos nuestra clase base Expression que representa una expresión
class Expression:
    def interpret(self):
        raise NotImplementedError("El método interpret() debe ser implementado por las subclases.")

# Definimos nuestras clases concretas que extienden la clase base Expression
class NumberExpression(Expression):
    def __init__(self, value):
        self.value = value

    def interpret(self):
        return self.value

class EvenExpression(Expression):
    def __init__(self, expression):
        self.expression = expression

    def interpret(self):
        value = self.expression.interpret()
        return value % 2 == 0

class OddExpression(Expression):
    def __init__(self, expression):
        self.expression = expression

    def interpret(self):
        value = self.expression.interpret()
        return value % 2 != 0

# Utilizamos el patrón Interpreter para interpretar y evaluar expresiones lógicas en nuestro lenguaje inventado
five = NumberExpression(5)
ten = NumberExpression(10)

even_expression = EvenExpression(ten)
odd_expression = OddExpression(five)

print(even_expression.interpret()) # True
print(odd_expression.interpret()) # True