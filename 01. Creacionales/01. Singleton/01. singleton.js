/***

Imaginemos que estamos construyendo una aplicación de registro de usuarios y queremos asegurarnos 
de que solo haya una instancia de la clase UserDatabase en toda la aplicación. Queremos acceder 
a esta instancia única desde cualquier parte de la aplicación.

Aquí es donde el patrón Singleton puede ser útil. 
Podemos utilizar el patrón Singleton para garantizar que solo haya una instancia de la clase 
UserDatabase y proporcionar un punto de acceso global a esta instancia.

*/

// Comencemos definiendo nuestra clase UserDatabase:

class UserDatabase {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
        console.log(`Usuario ${user} agregado a la base de datos.`);
    }

    getUsers() {
        return this.users;
    }
}

// A continuación, definimos nuestro Singleton que garantiza que solo haya una instancia de la clase UserDatabase:

class SingletonUserDatabase {
    constructor() {
        if (!SingletonUserDatabase.instance) {
            SingletonUserDatabase.instance = new UserDatabase();
        }
        return SingletonUserDatabase.instance;
    }

}

// Finalmente, podemos utilizar el patrón Singleton para acceder a la instancia única de UserDatabase 
// desde cualquier parte de la aplicación:

const userDatabaseInstance1 = new SingletonUserDatabase();
const userDatabaseInstance2 = new SingletonUserDatabase();

console.log(userDatabaseInstance1 === userDatabaseInstance2); // true

userDatabaseInstance1.addUser("John"); // Usuario John agregado a la base de datos.
userDatabaseInstance2.addUser("Jane"); // Usuario Jane agregado a la base de datos.

console.log(userDatabaseInstance1.getUsers()); // ["John", "Jane"]
console.log(userDatabaseInstance2.getUsers()); // ["John", "Jane"]


/***

En este ejemplo, el patrón Singleton nos permite garantizar que solo haya una instancia de la clase UserDatabase. 
Al acceder a la instancia a través del Singleton, podemos agregar usuarios a la base de datos y obtener la lista 
de usuarios desde cualquier parte de la aplicación.

*/