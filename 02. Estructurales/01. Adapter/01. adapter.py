# Calculadora antigua
class CalculadoraAntigua:
    def sumar(self, a, b):
        return a + b

    def restar(self, a, b):
        return a - b

# Adaptador para la calculadora antigua
class CalculadoraAdapter:
    def __init__(self):
        self.calculadora_antigua = CalculadoraAntigua()

    def multiplicar(self, a, b):
        resultado = 0
        for i in range(b):
            resultado = self.calculadora_antigua.sumar(resultado, a)
        return resultado

    def dividir(self, a, b):
        resultado = 0
        resto = a
        while resto >= b:
            resto = self.calculadora_antigua.restar(resto, b)
            resultado += 1
        return resultado

# Uso del adaptador
calculadora = CalculadoraAdapter()

print(calculadora.multiplicar(5, 3)) # Output: 15
print(calculadora.dividir(10, 2)) # Output: 5