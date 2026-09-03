/**
 * Patrón Adapter - Adaptador de Calculadora
 * 
 * Permite que objetos con interfaces incompatibles trabajen juntos.
 * 
 * Caso de uso: Adaptar una calculadora antigua (solo suma y resta) para usarla
 * en código moderno que necesita multiplicación y división.
 */

// Calculadora antigua con interfaz limitada
class CalculadoraAntigua {
  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }
}

// Adaptador que extiende la funcionalidad
class CalculadoraAdapter {
  private calculadoraAntigua: CalculadoraAntigua = new CalculadoraAntigua();

  multiplicar(a: number, b: number): number {
    let resultado = 0;
    for (let i = 0; i < b; i++) {
      resultado = this.calculadoraAntigua.sumar(resultado, a);
    }
    return resultado;
  }

  dividir(a: number, b: number): number {
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
const calculadora: CalculadoraAdapter = new CalculadoraAdapter();

console.log(calculadora.multiplicar(5, 3)); // 15
console.log(calculadora.dividir(10, 2)); // 5

/**
 * Beneficios del patrón Adapter:
 * - Permite reutilizar código legacy
 * - Facilita la integración de componentes incompatibles
 * - Promueve el principio de responsabilidad única
 */
