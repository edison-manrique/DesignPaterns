/***

Imaginemos que tenemos un chat en línea donde varios usuarios pueden enviar mensajes entre sí. 
Queremos implementar un mediador que facilite la comunicación entre los usuarios, 
evitando que tengan que conocerse directamente.

Aquí es donde el patrón Mediator puede ser útil. 
Podemos utilizar el patrón Mediator para definir un objeto mediador que coordine 
la comunicación entre los diferentes usuarios, evitando que interactúen directamente entre sí.

*/

// Comencemos definiendo nuestra clase ChatMediator que actuará como el mediador:

class ChatMediator {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(sender, message) {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receiveMessage(message);
            }
        });
    }
}

/***

En este ejemplo, la clase ChatMediator tiene un array users que almacena los usuarios registrados en el chat. 
Implementamos el método addUser(user) para agregar usuarios al chat y el método sendMessage(sender, message) 
para enviar un mensaje a todos los usuarios excepto al remitente.

*/

// Ahora, definamos nuestra clase User que representará a cada usuario del chat:

class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    sendMessage(message) {
        this.mediator.sendMessage(this, message);
    }

    receiveMessage(message) {
        console.log(`${this.name} received message: ${message}`);
    }
}

/***

En este ejemplo, la clase User tiene una propiedad name que representa el nombre del usuario y una propiedad mediator 
que representa el mediador del chat. Implementamos el método sendMessage(message) para que el usuario pueda enviar 
un mensaje a través del mediador y el método receiveMessage(message) para recibir y mostrar un mensaje.

*/

// Ahora, veamos cómo utilizar el patrón Mediator en nuestro chat:

const mediator = new ChatMediator();

const user1 = new User("User 1", mediator);
const user2 = new User("User 2", mediator);
const user3 = new User("User 3", mediator);

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

user1.sendMessage("Hello everyone!");
user2.sendMessage("Hey there!");

/***

En este ejemplo, creamos una instancia de ChatMediator y varias instancias de User. 
Luego, agregamos los usuarios al mediador utilizando el método addUser(user). 
Finalmente, los usuarios pueden enviar mensajes llamando al método sendMessage(message) 
en su instancia y el mediador se encargará de enviar el mensaje a los demás usuarios.

El patrón Mediator nos permite desacoplar la comunicación entre los objetos y centralizarla 
en un mediador, lo que facilita la gestión y la escalabilidad de la comunicación en un sistema.

*/