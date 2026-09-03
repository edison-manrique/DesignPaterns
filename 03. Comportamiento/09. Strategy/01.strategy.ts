/**
 * Patrón Strategy - Calculadora de Envíos
 * 
 * Define una familia de algoritmos intercambiables.
 * 
 * Caso de uso: Aplicación de envío de paquetes con diferentes estrategias
 * (terrestre, aéreo, marítimo).
 */

// Estrategia de envío
interface ShippingStrategy {
  calculate(pkg: Package): number;
}

// Paquete
interface Package {
  weight: number;
}

// Estrategia concreta: Envío terrestre
class GroundShippingStrategy implements ShippingStrategy {
  calculate(pkg: Package): number {
    return pkg.weight * 1.5;
  }
}

// Estrategia concreta: Envío aéreo
class AirShippingStrategy implements ShippingStrategy {
  calculate(pkg: Package): number {
    return pkg.weight * 3;
  }
}

// Estrategia concreta: Envío marítimo
class SeaShippingStrategy implements ShippingStrategy {
  calculate(pkg: Package): number {
    return pkg.weight * 2;
  }
}

// Contexto: Calculadora de envíos
class ShippingCalculator {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  calculate(pkg: Package): number {
    return this.strategy.calculate(pkg);
  }
}

// Uso del patrón Strategy
const pkg: Package = { weight: 10 };

const calculator: ShippingCalculator = new ShippingCalculator(new GroundShippingStrategy());
console.log(calculator.calculate(pkg)); // 15

calculator.setStrategy(new AirShippingStrategy());
console.log(calculator.calculate(pkg)); // 30

calculator.setStrategy(new SeaShippingStrategy());
console.log(calculator.calculate(pkg)); // 20

/**
 * Beneficios del patrón Strategy:
 * - Permite intercambiar algoritmos dinámicamente
 * - Evita condicionales complejas
 * - Facilita la adición de nuevas estrategias
 */
