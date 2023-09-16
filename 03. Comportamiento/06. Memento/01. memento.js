/***

Imaginemos que tenemos una aplicación de edición de texto donde los usuarios pueden escribir y modificar contenido. 
Queremos implementar la funcionalidad de deshacer/rehacer, que permita a los usuarios revertir y restaurar los cambios 
realizados en el texto.

Aquí es donde el patrón Memento puede ser útil. 
Podemos utilizar el patrón Memento para guardar y restaurar el estado anterior del texto, permitiendo a los usuarios 
deshacer y rehacer cambios de manera eficiente.

*/

// Comencemos definiendo nuestra clase TextEditor que actuará como el origen del memento:

class TextEditor {
    constructor() {
        this.content = "";
        this.history = [];
        this.currentIndex = -1;
    }

    addText(text) {
        this.content += text;
    }

    undo() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.content = this.history[this.currentIndex];
        }
    }

    redo() {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            this.content = this.history[this.currentIndex];
        }
    }

    save() {
        const snapshot = this.content;
        this.history = this.history.slice(0, this.currentIndex + 1);
        this.history.push(snapshot);
        this.currentIndex++;
    }

    getContent() {
        return this.content;
    }
}

/***

En este ejemplo, la clase TextEditor tiene una propiedad content que representa el contenido actual del texto. 
También tiene una propiedad history que almacena los estados anteriores del texto como instantáneas (snapshots) 
y una propiedad currentIndex que indica el índice del estado actual.

Implementamos los métodos addText(text) para agregar texto al contenido, undo() para deshacer el último cambio, 
redo() para rehacer el último cambio deshecho, save() para guardar una instantánea del estado actual y getContent() 
para obtener el contenido actual.

*/

// Ahora, veamos cómo utilizar el patrón Memento en nuestro editor de texto:

const editor = new TextEditor();

editor.addText("Hola, ");
editor.save(); // Guardamos el estado actual
console.log(editor.getContent()); // Output: "Hola, "

editor.addText("¿cómo estás?");
editor.save(); // Guardamos el estado actual
console.log(editor.getContent()); // Output: "Hola, ¿cómo estás?"

editor.undo(); // Deshacemos el último cambio
console.log(editor.getContent()); // Output: "Hola, "

editor.redo(); // Rehacemos el último cambio deshecho
console.log(editor.getContent()); // Output: "Hola, ¿cómo estás?"


/***

En este ejemplo, creamos una instancia de TextEditor y agregamos texto al contenido utilizando el método addText(text). 
Luego, guardamos el estado actual llamando al método save(). Podemos deshacer y rehacer cambios utilizando los métodos 
undo() y redo(), respectivamente. Finalmente, obtenemos el contenido actual llamando al método getContent().

El patrón Memento nos permite guardar y restaurar el estado anterior de un objeto de manera eficiente, lo que facilita 
la implementación de funcionalidades como deshacer/rehacer en una aplicación.

*/