/**
 * Patrón Visitor - Cálculo de Salarios de Empleados
 * 
 * Separa un algoritmo de los objetos sobre los que opera.
 * 
 * Caso de uso: Aplicación de gestión de empleados donde se calcula el salario
 * total sin modificar las clases de empleados existentes.
 */

// Elemento visitante
interface Employee {
  accept(visitor: SalaryCalculator): void;
}

// Elemento concreto: Desarrollador
class Developer implements Employee {
  public name: string;
  public salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  accept(visitor: SalaryCalculator): void {
    visitor.visitDeveloper(this);
  }
}

// Elemento concreto: Gerente
class Manager implements Employee {
  public name: string;
  public salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  accept(visitor: SalaryCalculator): void {
    visitor.visitManager(this);
  }
}

// Visitante concreto: Calculadora de salarios
class SalaryCalculator {
  private totalSalary: number = 0;

  visitDeveloper(developer: Developer): void {
    this.totalSalary += developer.salary;
  }

  visitManager(manager: Manager): void {
    this.totalSalary += manager.salary;
  }

  getTotalSalary(): void {
    console.log(`El salario total de los empleados es: ${this.totalSalary}`);
  }
}

// Uso del patrón Visitor
const developer1: Employee = new Developer('Juan', 5000);
const developer2: Employee = new Developer('María', 6000);
const manager: Employee = new Manager('Pedro', 8000);

const salaryCalculator: SalaryCalculator = new SalaryCalculator();

developer1.accept(salaryCalculator);
developer2.accept(salaryCalculator);
manager.accept(salaryCalculator);

salaryCalculator.getTotalSalary(); // El salario total de los empleados es: 19000

/**
 * Beneficios del patrón Visitor:
 * - Separa algoritmos de las estructuras de objetos
 * - Facilita añadir nuevas operaciones sin modificar clases
 * - Permite acumular estado durante la visita
 */
