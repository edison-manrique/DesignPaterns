/***

Imaginemos que tenemos una aplicación de creación de bebidas donde queremos implementar diferentes recetas de bebidas, 
como "Café", "Té" y "Chocolate caliente". Queremos utilizar el patrón Template Method para definir una estructura común 
para preparar las bebidas y permitir que cada tipo de bebida implemente sus propias variaciones específicas.

El patrón Template Method nos permite definir un método base en una clase que contiene una estructura común y utiliza 
métodos abstractos que deben ser implementados por las clases hijas. Esto facilita la creación de nuevas variantes de bebidas 
al tiempo que se mantiene la estructura general.

*/

// Comencemos definiendo nuestra clase base Beverage que actuará como el template para preparar las bebidas:

class Beverage {
    prepare() {
        this.boilWater();
        this.brew();
        this.pour();
        this.addCondiments();
    }

    boilWater() {
        console.log("Hirviendo agua...");
    }

    brew() {
        throw new Error("El método brew debe ser implementado por las clases hijas.");
    }

    pour() {
        console.log("Vertiendo en la taza...");
    }

    addCondiments() {
        throw new Error("El método addCondiments debe ser implementado por las clases hijas.");
    }
}

/***

En este ejemplo, la clase Beverage define el método prepare() que representa la estructura común para preparar una bebida. 
También define los métodos boilWater(), brew(), pour() y addCondiments(). Los métodos brew() y addCondiments() son métodos 
abstractos que deben ser implementados por las clases hijas.

*/

// Ahora, definamos nuestras clases hijas que representarán los diferentes tipos de bebidas:

class Coffee extends Beverage {
    brew() {
        console.log("Preparando café...");
    }

    addCondiments() {
        console.log("Añadiendo azúcar y leche al café...");
    }
}

class Tea extends Beverage {
    brew() {
        console.log("Preparando té...");
    }

    addCondiments() {
        console.log("Añadiendo limón al té...");
    }
}

class HotChocolate extends Beverage {
    brew() {
        console.log("Preparando chocolate caliente...");
    }

    addCondiments() {
        console.log("Añadiendo malvaviscos al chocolate caliente...");
    }
}

/***

En este ejemplo, cada clase hija (Coffee, Tea y HotChocolate) implementa los métodos abstractos brew() 
y addCondiments() según las necesidades específicas de cada tipo de bebida. Por ejemplo, en la clase Coffee, 
el método brew() prepara el café y el método addCondiments() añade azúcar y leche al café.

*/

// Ahora, veamos cómo utilizar el patrón Template Method para preparar bebidas:

const coffee = new Coffee();
coffee.prepare();
// Hirviendo agua...
// Preparando café...
// Vertiendo en la taza...
// Añadiendo azúcar y leche al café...

const tea = new Tea();
tea.prepare();
// Hirviendo agua...
// Preparando té...
// Vertiendo en la taza...
// Añadiendo limón al té...

const hotChocolate = new HotChocolate();
hotChocolate.prepare();
// Hirviendo agua...
// Preparando chocolate caliente...
// Vertiendo en la taza...
// Añadiendo malvaviscos al chocolate caliente...

/***

En este ejemplo, creamos instancias de las clases hijas (Coffee, Tea y HotChocolate) y llamamos al método prepare() 
para preparar cada tipo de bebida. La estructura común definida en la clase base Beverage se utiliza para preparar 
la bebida, mientras que los métodos implementados en las clases hijas se encargan de las variaciones específicas 
de cada tipo de bebida.

El patrón Template Method nos permite definir una estructura común para preparar bebidas y permitir que cada tipo 
de bebida implemente sus propias variaciones específicas. Esto facilita la creación de nuevas variantes de bebidas 
al tiempo que se mantiene la estructura general.

*/