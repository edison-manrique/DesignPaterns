/***

Imaginemos que estamos creando un lenguaje de programación muy básico que permite realizar operaciones lógicas, 
como evaluar si un número es par o impar. Queremos implementar un intérprete que pueda analizar y evaluar 
expresiones lógicas escritas en nuestro lenguaje inventado.

Aquí es donde el patrón Interpreter puede ser útil. Podemos utilizar el patrón Interpreter para definir una 
gramática y un conjunto de reglas de interpretación que nos permitan analizar y evaluar las expresiones lógicas.

*/

// Comencemos definiendo nuestra clase base Expression que representa una expresión:

class Expression {
    interpret() {
        throw new Error("El método interpret() debe ser implementado por las subclases.");
    }
}

// A continuación, definimos nuestras clases concretas que extienden la clase base Expression:

class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret() {
        return this.value;
    }
}

class EvenExpression extends Expression {
    constructor(expression) {
        super();
        this.expression = expression;
    }

    interpret() {
        const value = this.expression.interpret();
        return value % 2 === 0;
    }
}

class OddExpression extends Expression {
    constructor(expression) {
        super();
        this.expression = expression;
    }

    interpret() {
        const value = this.expression.interpret();
        return value % 2 !== 0;
    }
}

// Ahora podemos utilizar el patrón Interpreter para interpretar y evaluar expresiones lógicas en nuestro lenguaje inventado:

const five = new NumberExpression(5);
const ten = new NumberExpression(10);

const evenExpression = new EvenExpression(ten);
const oddExpression = new OddExpression(five);

console.log(evenExpression.interpret()); // true
console.log(oddExpression.interpret()); // true

/***

En este ejemplo, el patrón Interpreter nos permite definir una gramática y un conjunto de reglas de interpretación 
para analizar y evaluar expresiones lógicas en nuestro lenguaje inventado. Cada expresión, como NumberExpression, 
EvenExpression y OddExpression, implementa el método interpret() que evalúa la expresión correspondiente.

Podemos construir expresiones compuestas utilizando las clases concretas y luego llamar al método interpret() 
en la expresión raíz para evaluar el resultado de la expresión lógica.

*/