/***

Imaginemos que tenemos una aplicación de envío de paquetes donde queremos implementar diferentes estrategias de envío, 
como "Envío terrestre", "Envío aéreo" y "Envío marítimo". Queremos utilizar el patrón Strategy para permitir a los usuarios 
seleccionar la estrategia de envío que mejor se adapte a sus necesidades y calcular el costo de envío correspondiente.

El patrón Strategy nos permite encapsular diferentes algoritmos o estrategias en clases separadas y utilizarlas de manera 
intercambiable, lo que facilita la adición de nuevas estrategias y la personalización del comportamiento de la aplicación.

*/

// Comencemos definiendo nuestra clase ShippingCalculator que actuará como el contexto que utiliza el patrón Strategy:

class ShippingCalculator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(package) {
        return this.strategy.calculate(package);
    }
}

/***

En este ejemplo, la clase ShippingCalculator tiene una propiedad strategy que representa la estrategia de envío actual. 
Implementamos el método setStrategy(strategy) para cambiar la estrategia de envío y el método calculate(package) 
que delega el cálculo del costo de envío a la estrategia actual.

*/

// Ahora, definamos nuestras clases de estrategia que representarán las diferentes estrategias de envío:

class GroundShippingStrategy {
    calculate(package) {
        // Cálculo del costo de envío terrestre
        return package.weight * 1.5;
    }
}

class AirShippingStrategy {
    calculate(package) {
        // Cálculo del costo de envío aéreo
        return package.weight * 3;
    }
}

class SeaShippingStrategy {
    calculate(package) {
        // Cálculo del costo de envío marítimo
        return package.weight * 2;
    }
}

/***

En este ejemplo, cada clase de estrategia (GroundShippingStrategy, AirShippingStrategy y SeaShippingStrategy) 
implementa el método calculate(package) que realiza el cálculo del costo de envío según la estrategia correspondiente. 
Por ejemplo, en la estrategia GroundShippingStrategy, el costo de envío se calcula multiplicando el peso del paquete por 1.5.

*/

// Ahora, veamos cómo utilizar el patrón Strategy en nuestra aplicación de envío de paquetes:

const package = {
    weight: 10
};

const calculator = new ShippingCalculator(new GroundShippingStrategy());
console.log(calculator.calculate(package)); // 15

calculator.setStrategy(new AirShippingStrategy());
console.log(calculator.calculate(package)); // 30

calculator.setStrategy(new SeaShippingStrategy());
console.log(calculator.calculate(package)); // 20

/***

En este ejemplo, creamos un objeto package que representa un paquete con un peso de 10. Luego, creamos una instancia 
de ShippingCalculator y utilizamos el método calculate(package) para calcular el costo de envío según la estrategia actual. 
Dependiendo de la estrategia establecida, el método calculate(package) llamará al algoritmo correspondiente en la clase 
de estrategia actual.

El patrón Strategy nos permite encapsular diferentes algoritmos o estrategias en clases separadas y utilizarlas de manera 
intercambiable. Esto facilita la adición de nuevas estrategias y la personalización del comportamiento de la aplicación.

*/