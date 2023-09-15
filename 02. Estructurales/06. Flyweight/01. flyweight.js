/***

    Imaginemos que estamos construyendo una aplicación de edición de texto en la que los usuarios 
    pueden resaltar diferentes partes del texto con diferentes colores. Sin embargo, algunos colores s
    e utilizan con más frecuencia que otros.

    Aquí es donde el patrón Flyweight puede ser útil. Podemos utilizar el patrón Flyweight para compartir 
    y reutilizar los objetos de color entre diferentes partes del texto, en lugar de crear un objeto de color 
    nuevo para cada parte.

*/

// Comencemos definiendo nuestra clase Flyweight que representa los objetos de color:

class Color {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

// A continuación, definimos nuestra clase Text que representa una parte del texto:

class Text {
    constructor(content, color) {
        this.content = content;
        this.color = color;
    }

    highlight() {
        console.log(`"${this.content}" resaltado con el color ${this.color.getName()}`);
    }
}

// Luego, creamos un FlyweightFactory que se encargará de crear y almacenar instancias compartidas de Color:

class FlyweightFactory {
    constructor() {
        this.colors = {};
    }

    getColor(name) {
        if (!this.colors[name]) {
            this.colors[name] = new Color(name);
        }
        return this.colors[name];
    }
}

// Finalmente, podemos utilizar el patrón Flyweight para resaltar diferentes partes del texto con diferentes colores:

const flyweightFactory = new FlyweightFactory();

const text1 = new Text("Hola", flyweightFactory.getColor("rojo"));
text1.highlight(); // "Hola" resaltado con el color rojo

const text2 = new Text("Mundo", flyweightFactory.getColor("azul"));
text2.highlight(); // "Mundo" resaltado con el color azul

const text3 = new Text("¡Hola de nuevo!", flyweightFactory.getColor("rojo"));
text3.highlight(); // "¡Hola de nuevo!" resaltado con el color rojo


/***

    En este ejemplo, el patrón Flyweight nos permite compartir y reutilizar los objetos de color entre diferentes partes del texto. 
    En lugar de crear un objeto de color nuevo para cada parte, utilizamos el FlyweightFactory para obtener instancias compartidas 
    de Color y las pasamos a cada objeto Text.

*/