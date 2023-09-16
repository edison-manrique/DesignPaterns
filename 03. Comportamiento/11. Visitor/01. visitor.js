/***

Imaginemos que tenemos una aplicación de gestión de empleados donde tenemos diferentes tipos de empleados, 
como desarrolladores y gerentes. Queremos implementar una funcionalidad que nos permita calcular el salario 
total de todos los empleados, pero sin modificar las clases existentes. Para esto, podemos utilizar el patrón Visitor.

El patrón Visitor nos permite separar la lógica de cálculo del salario de los empleados en una clase separada, 
llamada Visitor. Cada tipo de empleado implementará un método accept que acepta un Visitor y llama al método 
correspondiente en el Visitor para realizar el cálculo del salario.

*/

// Comencemos definiendo nuestras clases de empleados:

class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    accept(visitor) {
        visitor.visitDeveloper(this);
    }
}

class Manager {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    accept(visitor) {
        visitor.visitManager(this);
    }
}

/***

En este ejemplo, tenemos las clases Developer y Manager que representan los diferentes tipos de empleados. 
Cada clase implementa el método accept que acepta un Visitor y llama al método correspondiente en el Visitor.

*/

// Ahora, definamos nuestra clase Visitor que se encargará de calcular el salario total de los empleados:

class SalaryCalculator {
    constructor() {
        this.totalSalary = 0;
    }

    visitDeveloper(developer) {
        this.totalSalary += developer.salary;
    }

    visitManager(manager) {
        this.totalSalary += manager.salary;
    }

    getTotalSalary() {
        console.log(`El salario total de los empleados es: ${this.totalSalary}`);
    }
}

/***

En este ejemplo, la clase SalaryCalculator implementa los métodos visitDeveloper y visitManager que suman 
el salario de cada tipo de empleado al salario total. También tiene un método getTotalSalary que muestra 
el salario total de los empleados.

*/

// Ahora, veamos cómo utilizar el patrón Visitor para calcular el salario total de los empleados:

const developer1 = new Developer("Juan", 5000);
const developer2 = new Developer("María", 6000);
const manager = new Manager("Pedro", 8000);

const salaryCalculator = new SalaryCalculator();

developer1.accept(salaryCalculator);
developer2.accept(salaryCalculator);
manager.accept(salaryCalculator);

salaryCalculator.getTotalSalary();
// El salario total de los empleados es: 19000

/***

En este ejemplo, creamos instancias de los empleados (Developer y Manager) y una instancia del Visitor (SalaryCalculator). 
Luego, llamamos al método accept en cada empleado, pasando el Visitor como argumento. Esto permite que el Visitor realice 
el cálculo del salario correspondiente para cada tipo de empleado. Finalmente, llamamos al método getTotalSalary en el 
Visitor para obtener el salario total de los empleados.

El patrón Visitor nos permite separar la lógica de cálculo del salario de los empleados en una clase separada, evitando 
modificar las clases existentes. Esto facilita la extensibilidad y el mantenimiento del código.

*/