/**
 * Patrón Interpreter - Intérprete de Expresiones Lógicas
 * 
 * Define una gramática y un intérprete para un lenguaje simple.
 * 
 * Caso de uso: Intérprete de expresiones lógicas para evaluar si un número
 * es par o impar.
 */

// Expresión abstracta
abstract class Expression {
  abstract interpret(): boolean | number;
}

// Expresión concreta: Número
class NumberExpression extends Expression {
  private value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  interpret(): number {
    return this.value;
  }
}

// Expresión concreta: Es Par
class EvenExpression extends Expression {
  private expression: Expression;

  constructor(expression: Expression) {
    super();
    this.expression = expression;
  }

  interpret(): boolean {
    const value = this.expression.interpret() as number;
    return value % 2 === 0;
  }
}

// Expresión concreta: Es Impar
class OddExpression extends Expression {
  private expression: Expression;

  constructor(expression: Expression) {
    super();
    this.expression = expression;
  }

  interpret(): boolean {
    const value = this.expression.interpret() as number;
    return value % 2 !== 0;
  }
}

// Uso del patrón Interpreter
const five: NumberExpression = new NumberExpression(5);
const ten: NumberExpression = new NumberExpression(10);

const evenExpression: EvenExpression = new EvenExpression(ten);
const oddExpression: OddExpression = new OddExpression(five);

console.log(evenExpression.interpret()); // true
console.log(oddExpression.interpret()); // true

/**
 * Beneficios del patrón Interpreter:
 * - Facilita la definición e interpretación de gramáticas simples
 * - Permite construir expresiones complejas combinando expresiones simples
 * - Fácil de extender con nuevas reglas gramaticales
 */
