/**
 * Patrón Builder - Constructor de Pizzas Personalizadas
 * 
 * Separa la construcción de un objeto complejo de su representación.
 * 
 * Caso de uso: Aplicación de creación de pizzas personalizadas con diferentes
 * ingredientes y tamaños.
 */

// Clase que representa una pizza
class Pizza {
  private ingredients: string[] = [];
  private size: string = '';

  addIngredient(ingredient: string): void {
    this.ingredients.push(ingredient);
  }

  setSize(size: string): void {
    this.size = size;
  }

  getInfo(): string {
    return `Pizza ${this.size} con ingredientes: ${this.ingredients.join(', ')}`;
  }
}

// Builder que construye pizzas de forma fluida
class PizzaBuilder {
  private pizza: Pizza = new Pizza();

  addIngredient(ingredient: string): PizzaBuilder {
    this.pizza.addIngredient(ingredient);
    return this;
  }

  setSize(size: string): PizzaBuilder {
    this.pizza.setSize(size);
    return this;
  }

  build(): Pizza {
    return this.pizza;
  }
}

// Uso del patrón Builder
const pizza: Pizza = new PizzaBuilder()
  .setSize('Mediana')
  .addIngredient('Queso')
  .addIngredient('Jamón')
  .addIngredient('Champiñones')
  .build();

console.log(pizza.getInfo()); // Pizza Mediana con ingredientes: Queso, Jamón, Champiñones

/**
 * Beneficios del patrón Builder:
 * - Construcción fluida y legible de objetos complejos
 * - Inmutabilidad potencial del objeto final
 * - Control total sobre el proceso de construcción
 */
