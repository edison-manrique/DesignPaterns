/***

Imaginemos que estamos construyendo una aplicación de gestión de tareas. 
Tenemos diferentes tipos de tareas, como tareas individuales y tareas compuestas 
que contienen sub-tareas. Queremos poder tratar tanto las tareas individuales como 
las tareas compuestas de la misma manera.

Aquí es donde el patrón Composite puede ser útil. 
Podemos utilizar el patrón Composite para tratar tanto las tareas 
individuales como las tareas compuestas como objetos del mismo tipo.

*/

// Comencemos definiendo nuestra clase base de tarea:

class Task {
    constructor(name) {
        this.name = name;
    }

    complete() {
        console.log(`Completando tarea: ${this.name}`);
    }
}

// A continuación, definimos nuestra clase de tarea compuesta que puede contener sub-tareas:

class CompositeTask extends Task {
    constructor(name) {
        super(name);
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    complete() {
        console.log(`Completando tarea compuesta: ${this.name}`);
        this.tasks.forEach((task) => {
            task.complete();
        });
    }
}

// Finalmente, podemos utilizar el patrón Composite para crear tareas individuales y tareas compuestas:

// Crear tareas individuales
const task1 = new Task("Tarea 1");
const task2 = new Task("Tarea 2");

// Crear tarea compuesta
const compositeTask = new CompositeTask("Tarea compuesta");
compositeTask.addTask(task1);
compositeTask.addTask(task2);

// Completar tareas
compositeTask.complete(); 

// Completando tarea compuesta: Tarea compuesta
// Completando tarea: Tarea 1
// Completando tarea: Tarea 2

/***

En este ejemplo, el patrón Composite nos permite tratar tanto las tareas 
individuales como las tareas compuestas como objetos del mismo tipo. 
Esto nos permite tratar las tareas de manera uniforme, sin importar 
si son tareas individuales o tareas compuestas.

*/
