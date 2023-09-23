# Definimos nuestra clase TextEditor que actuará como el origen del memento
class TextEditor:
    def __init__(self):
        self.content = ""
        self.history = []
        self.current_index = -1

    def add_text(self, text):
        self.content += text

    def undo(self):
        if self.current_index > 0:
            self.current_index -= 1
            self.content = self.history[self.current_index]

    def redo(self):
        if self.current_index < len(self.history) - 1:
            self.current_index += 1
            self.content = self.history[self.current_index]

    def save(self):
        snapshot = self.content
        self.history = self.history[:self.current_index + 1]
        self.history.append(snapshot)
        self.current_index += 1

    def get_content(self):
        return self.content

# Utilizamos el patrón Memento en nuestro editor de texto
editor = TextEditor()

editor.add_text("Hola, ")
editor.save() # Guardamos el estado actual
print(editor.get_content()) # Output: "Hola, "

editor.add_text("¿cómo estás?")
editor.save() # Guardamos el estado actual
print(editor.get_content()) # Output: "Hola, ¿cómo estás?"

editor.undo() # Deshacemos el último cambio
print(editor.get_content()) # Output: "Hola, "

editor.redo() # Rehacemos el último cambio deshecho
print(editor.get_content()) # Output: "Hola, ¿cómo estás?"