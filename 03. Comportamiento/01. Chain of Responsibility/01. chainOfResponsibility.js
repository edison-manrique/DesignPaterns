/***

Imaginemos que estamos construyendo una aplicación de procesamiento de solicitudes de compra. 
Tenemos diferentes niveles de aprobación para las solicitudes de compra y queremos implementar 
un flujo de trabajo donde cada nivel de aprobación pueda tomar una decisión sobre la solicitud 
y pasarla al siguiente nivel si es necesario.

Aquí es donde el patrón Chain of Responsibility puede ser útil. Podemos utilizar el patrón 
Chain of Responsibility para construir una cadena de objetos que representan los diferentes 
niveles de aprobación y cada objeto en la cadena puede tomar una decisión sobre la solicitud 
y pasarla al siguiente objeto en la cadena si es necesario.

*/

// Comencemos definiendo nuestra clase base Approver que representa un nivel de aprobación:

class Approver {
    constructor() {
        this.nextApprover = null;
    }

    setNextApprover(approver) {
        this.nextApprover = approver;
    }

    processRequest(request) {
        throw new Error("El método processRequest() debe ser implementado por las subclases.");
    }
}

// A continuación, definimos nuestras clases concretas que extienden la clase base Approver:

class Manager extends Approver {
    processRequest(request) {
        if (request.amount <= 1000) {
            console.log("La solicitud de compra ha sido aprobada por el gerente.");
        } else if (this.nextApprover) {
            this.nextApprover.processRequest(request);
        } else {
            console.log("La solicitud de compra no puede ser aprobada.");
        }
    }
}

class Director extends Approver {
    processRequest(request) {
        if (request.amount <= 5000) {
            console.log("La solicitud de compra ha sido aprobada por el director.");
        } else if (this.nextApprover) {
            this.nextApprover.processRequest(request);
        } else {
            console.log("La solicitud de compra no puede ser aprobada.");
        }
    }
}

class CEO extends Approver {
    processRequest(request) {
        if (request.amount <= 10000) {
            console.log("La solicitud de compra ha sido aprobada por el CEO.");
        } else {
            console.log("La solicitud de compra no puede ser aprobada.");
        }
    }
}

// Ahora podemos utilizar el patrón Chain of Responsibility para procesar solicitudes de compra:

const manager = new Manager();
const director = new Director();
const ceo = new CEO();

manager.setNextApprover(director);
director.setNextApprover(ceo);

const request1 = { amount: 800 };
manager.processRequest(request1); // La solicitud de compra ha sido aprobada por el gerente.

const request2 = { amount: 3500 };
manager.processRequest(request2); // La solicitud de compra ha sido aprobada por el director.

const request3 = { amount: 15000 };
manager.processRequest(request3); // La solicitud de compra no puede ser aprobada.

/***

En este ejemplo, el patrón Chain of Responsibility nos permite construir una cadena de objetos 
Approver donde cada objeto puede tomar una decisión sobre la solicitud de compra y pasarla al 
siguiente objeto en la cadena si es necesario. Esto nos permite implementar un flujo de trabajo 
flexible y escalable para procesar solicitudes de compra.

*/