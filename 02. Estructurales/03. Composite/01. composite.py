# Definimos nuestra clase base de tarea
class Task:
    def __init__(self, name):
        self.name = name

    def complete(self):
        print(f"Completando tarea: {self.name}")

# Definimos nuestra clase de tarea compuesta que puede contener sub-tareas
class CompositeTask(Task):
    def __init__(self, name):
        super().__init__(name)
        self.tasks = []

    def add_task(self, task):
        self.tasks.append(task)

    def remove_task(self, task):
        if task in self.tasks:
            self.tasks.remove(task)

    def complete(self):
        print(f"Completando tarea compuesta: {self.name}")
        for task in self.tasks:
            task.complete()

# Utilizamos el patrón Composite para crear tareas individuales y tareas compuestas

# Crear tareas individuales
task1 = Task("Tarea 1")
task2 = Task("Tarea 2")

# Crear tarea compuesta
composite_task = CompositeTask("Tarea compuesta")
composite_task.add_task(task1)
composite_task.add_task(task2)

# Completar tareas
composite_task.complete()

# Output:
# Completando tarea compuesta: Tarea compuesta
# Completando tarea: Tarea 1
# Completando tarea: Tarea 2