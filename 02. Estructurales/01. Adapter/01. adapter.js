/***

Supongamos que tenemos una calculadora antigua que solo puede sumar y restar números enteros. 
Sin embargo, queremos utilizarla en nuestro código moderno que necesita realizar operaciones 
más complejas, como multiplicación y división, y trabajar con números decimales.

Para resolver esto, podemos crear un adaptador que envuelva la calculadora antigua 
y proporcione una interfaz compatible con nuestras necesidades actuales.

*/

// Calculadora antigua
class CalculadoraAntigua {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }
}

// Adaptador para la calculadora antigua
class CalculadoraAdapter {
    constructor() {
        this.calculadoraAntigua = new CalculadoraAntigua();
    }

    multiplicar(a, b) {
        let resultado = 0;
        for (let i = 0; i < b; i++) {
            resultado = this.calculadoraAntigua.sumar(resultado, a);
        }
        return resultado;
    }

    dividir(a, b) {
        let resultado = 0;
        let resto = a;
        while (resto >= b) {
            resto = this.calculadoraAntigua.restar(resto, b);
            resultado++;
        }
        return resultado;
    }
}


// Uso del adaptador
const calculadora = new CalculadoraAdapter();

console.log(calculadora.multiplicar(5, 3)); // Output: 15
console.log(calculadora.dividir(10, 2)); // Output: 5

/***

En este ejemplo, creamos una clase CalculadoraAntigua que representa la calculadora 
antigua con sus métodos sumar y restar. 
Luego, creamos la clase CalculadoraAdapter que envuelve la calculadora antigua 
y proporciona métodos adicionales como multiplicar y dividir utilizando la funcionalidad 
existente de la calculadora antigua.

Finalmente, creamos una instancia de CalculadoraAdapter y utilizamos los métodos multiplicar 
y dividir para realizar operaciones más complejas, como multiplicación y división.

*/