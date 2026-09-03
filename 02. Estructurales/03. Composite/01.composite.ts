/**
 * Patrón Composite - Gestión de Tareas
 * 
 * Compone objetos en estructuras de árbol para representar jerarquías.
 * 
 * Caso de uso: Aplicación de gestión de tareas con tareas individuales
 * y tareas compuestas que contienen sub-tareas.
 */

// Componente base del composite
abstract class Task {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract complete(): void;
}

// Hoja del composite (tarea individual)
class SimpleTask extends Task {
  complete(): void {
    console.log(`Completando tarea: ${this.name}`);
  }
}

// Rama del composite (tarea compuesta)
class CompositeTask extends Task {
  private tasks: Task[] = [];

  constructor(name: string) {
    super(name);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  removeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  complete(): void {
    console.log(`Completando tarea compuesta: ${this.name}`);
    this.tasks.forEach((task) => task.complete());
  }
}

// Uso del patrón Composite
const task1: Task = new SimpleTask('Tarea 1');
const task2: Task = new SimpleTask('Tarea 2');

const compositeTask: CompositeTask = new CompositeTask('Tarea compuesta');
compositeTask.addTask(task1);
compositeTask.addTask(task2);

compositeTask.complete();
// Completando tarea compuesta: Tarea compuesta
// Completando tarea: Tarea 1
// Completando tarea: Tarea 2

/**
 * Beneficios del patrón Composite:
 * - Trata objetos individuales y compuestos uniformemente
 * - Facilita la creación de estructuras jerárquicas
 * - Simplifica el código cliente
 */
