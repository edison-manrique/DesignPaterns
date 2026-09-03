/**
 * Patrón Memento - Editor de Texto con Deshacer/Rehacer
 * 
 * Captura y externaliza el estado interno de un objeto.
 * 
 * Caso de uso: Editor de texto con funcionalidad de deshacer/rehacer cambios.
 */

// Editor de texto con historial
class TextEditor {
  private content: string = '';
  private history: string[] = [];
  private currentIndex: number = -1;

  addText(text: string): void {
    this.content += text;
  }

  undo(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const previousState = this.history[this.currentIndex];
      if (previousState !== undefined) {
        this.content = previousState;
      }
    }
  }

  redo(): void {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      const nextState = this.history[this.currentIndex];
      if (nextState !== undefined) {
        this.content = nextState;
      }
    }
  }

  save(): void {
    const snapshot = this.content;
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(snapshot);
    this.currentIndex++;
  }

  getContent(): string {
    return this.content;
  }
}

// Uso del patrón Memento
const editor: TextEditor = new TextEditor();

editor.addText('Hola, ');
editor.save(); // Guardamos el estado actual
console.log(editor.getContent()); // Output: "Hola, "

editor.addText('¿cómo estás?');
editor.save(); // Guardamos el estado actual
console.log(editor.getContent()); // Output: "Hola, ¿cómo estás?"

editor.undo(); // Deshacemos el último cambio
console.log(editor.getContent()); // Output: "Hola, "

editor.redo(); // Rehacemos el último cambio deshecho
console.log(editor.getContent()); // Output: "Hola, ¿cómo estás?"

/**
 * Beneficios del patrón Memento:
 * - Permite restaurar estados anteriores sin violar encapsulamiento
 * - Facilita la implementación de operaciones deshacer/rehacer
 * - Mantiene el historial de estados de forma controlada
 */
