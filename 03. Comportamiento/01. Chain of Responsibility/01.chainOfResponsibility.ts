/**
 * Patrón Chain of Responsibility - Aprobación de Solicitudes de Compra
 * 
 * Pasa una solicitud a lo largo de una cadena de manejadores.
 * 
 * Caso de uso: Aplicación de procesamiento de solicitudes de compra con diferentes
 * niveles de aprobación (Gerente, Director, CEO).
 */

// Solicitud de compra
interface PurchaseRequest {
  amount: number;
}

// Manejador abstracto
abstract class Approver {
  protected nextApprover: Approver | null = null;

  setNextApprover(approver: Approver): void {
    this.nextApprover = approver;
  }

  abstract processRequest(request: PurchaseRequest): void;
}

// Manejador concreto: Gerente
class Manager extends Approver {
  processRequest(request: PurchaseRequest): void {
    if (request.amount <= 1000) {
      console.log('La solicitud de compra ha sido aprobada por el gerente.');
    } else if (this.nextApprover) {
      this.nextApprover.processRequest(request);
    } else {
      console.log('La solicitud de compra no puede ser aprobada.');
    }
  }
}

// Manejador concreto: Director
class Director extends Approver {
  processRequest(request: PurchaseRequest): void {
    if (request.amount <= 5000) {
      console.log('La solicitud de compra ha sido aprobada por el director.');
    } else if (this.nextApprover) {
      this.nextApprover.processRequest(request);
    } else {
      console.log('La solicitud de compra no puede ser aprobada.');
    }
  }
}

// Manejador concreto: CEO
class CEO extends Approver {
  processRequest(request: PurchaseRequest): void {
    if (request.amount <= 10000) {
      console.log('La solicitud de compra ha sido aprobada por el CEO.');
    } else {
      console.log('La solicitud de compra no puede ser aprobada.');
    }
  }
}

// Uso del patrón Chain of Responsibility
const manager: Approver = new Manager();
const director: Approver = new Director();
const ceo: Approver = new CEO();

manager.setNextApprover(director);
director.setNextApprover(ceo);

const request1: PurchaseRequest = { amount: 800 };
manager.processRequest(request1); // La solicitud de compra ha sido aprobada por el gerente.

const request2: PurchaseRequest = { amount: 3500 };
manager.processRequest(request2); // La solicitud de compra ha sido aprobada por el director.

const request3: PurchaseRequest = { amount: 15000 };
manager.processRequest(request3); // La solicitud de compra no puede ser aprobada.

/**
 * Beneficios del patrón Chain of Responsibility:
 * - Desacopla el emisor y el receptor de la solicitud
 * - Facilita la adición de nuevos manejadores
 * - Permite configurar la cadena dinámicamente
 */
