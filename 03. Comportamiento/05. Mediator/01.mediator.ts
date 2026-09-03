/**
 * Patrón Mediator - Chat en Línea
 * 
 * Define un objeto que centraliza la comunicación entre objetos.
 * 
 * Caso de uso: Chat en línea donde los usuarios se comunican a través de un mediador.
 */

// Usuario del chat
class User {
  private name: string;
  private mediator: ChatMediator;

  constructor(name: string, mediator: ChatMediator) {
    this.name = name;
    this.mediator = mediator;
  }

  sendMessage(message: string): void {
    this.mediator.sendMessage(this, message);
  }

  receiveMessage(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Mediador del chat
class ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(sender: User, message: string): void {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }
}

// Uso del patrón Mediator
const mediator: ChatMediator = new ChatMediator();

const user1: User = new User('User 1', mediator);
const user2: User = new User('User 2', mediator);
const user3: User = new User('User 3', mediator);

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

user1.sendMessage('Hello everyone!');
user2.sendMessage('Hey there!');

/**
 * Beneficios del patrón Mediator:
 * - Reduce el acoplamiento entre objetos
 * - Centraliza la lógica de comunicación
 * - Facilita la gestión y escalabilidad
 */
