/**
 * Patrón Flyweight - Resaltado de Texto con Colores
 * 
 * Comparte objetos para minimizar el uso de memoria.
 * 
 * Caso de uso: Aplicación de edición de texto donde se resaltan partes del texto
 * con diferentes colores, reutilizando los objetos de color.
 */

// Flyweight que representa un color
class Color {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

// Objeto que usa el flyweight
class Text {
  private content: string;
  private color: Color;

  constructor(content: string, color: Color) {
    this.content = content;
    this.color = color;
  }

  highlight(): void {
    console.log(`"${this.content}" resaltado con el color ${this.color.getName()}`);
  }
}

// Fábrica de flyweights
class FlyweightFactory {
  private colors: Record<string, Color> = {};

  getColor(name: string): Color {
    if (!this.colors[name]) {
      this.colors[name] = new Color(name);
    }
    return this.colors[name];
  }
}

// Uso del patrón Flyweight
const flyweightFactory: FlyweightFactory = new FlyweightFactory();

const text1: Text = new Text('Hola', flyweightFactory.getColor('rojo'));
text1.highlight(); // "Hola" resaltado con el color rojo

const text2: Text = new Text('Mundo', flyweightFactory.getColor('azul'));
text2.highlight(); // "Mundo" resaltado con el color azul

const text3: Text = new Text('¡Hola de nuevo!', flyweightFactory.getColor('rojo'));
text3.highlight(); // "¡Hola de nuevo!" resaltado con el color rojo (reutiliza el objeto)

/**
 * Beneficios del patrón Flyweight:
 * - Reduce significativamente el uso de memoria
 * - Centraliza la creación de objetos compartidos
 * - Ideal cuando hay muchos objetos similares
 */
