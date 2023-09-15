/***

Imaginemos que estamos construyendo una aplicación de creación de pizzas personalizadas. 
Queremos tener un código limpio y modular que nos permita construir pizzas con diferentes 
ingredientes y tamaños de forma fácil y flexible.

Aquí es donde el patrón Builder puede ser útil. Podemos utilizar el patrón Builder para 
encapsular la lógica de construcción de las pizzas y proporcionar una interfaz fluida 
para agregar ingredientes y establecer el tamaño de la pizza.

*/

// Comencemos definiendo nuestra clase Pizza que representa una pizza:

class Pizza {
    constructor() {
        this.ingredients = [];
        this.size = "";
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    setSize(size) {
        this.size = size;
    }

    getInfo() {
        return `Pizza ${this.size} con ingredientes: ${this.ingredients.join(", ")}`;
    }
}

// A continuación, definimos nuestra clase PizzaBuilder que se encargará de construir las pizzas:

class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    addIngredient(ingredient) {
        this.pizza.addIngredient(ingredient);
        return this; // Retornamos el propio builder para permitir la construcción fluida
    }

    setSize(size) {
        this.pizza.setSize(size);
        return this; // Retornamos el propio builder para permitir la construcción fluida
    }

    build() {
        return this.pizza;
    }
}

// Ahora podemos utilizar el patrón Builder para construir pizzas personalizadas de forma fácil y flexible:

const pizzaBuilder = new PizzaBuilder();

const pizza = pizzaBuilder
    .setSize("Mediana")
    .addIngredient("Queso")
    .addIngredient("Jamón")
    .addIngredient("Champiñones")
    .build();

console.log(pizza.getInfo()); // Pizza Mediana con ingredientes: Queso, Jamón, Champiñones

/***

En este ejemplo, el patrón Builder nos permite construir pizzas personalizadas utilizando una interfaz fluida. 
El builder PizzaBuilder encapsula la lógica de construcción de las pizzas y nos proporciona métodos encadenables 
para agregar ingredientes y establecer el tamaño de la pizza.

*/