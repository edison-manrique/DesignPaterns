/***

Imaginemos que estamos construyendo una aplicación que necesita conectarse a diferentes bases de datos, 
como MySQL, PostgreSQL y MongoDB. Queremos tener un código limpio y modular que nos permita crear fácilmente 
las conexiones a estas bases de datos sin tener que preocuparnos por los detalles de implementación de cada una.

Aquí es donde el patrón Factory puede ser útil. Podemos utilizar el patrón Factory para encapsular la lógica 
de creación de las conexiones a las bases de datos y proporcionar una interfaz común para interactuar con ellas.

*/

// Comencemos definiendo una interfaz común para nuestras conexiones a bases de datos:

class DatabaseConnection {
    connect() {
        throw new Error("Método connect() debe ser implementado por las subclases.");
    }

    query(sql) {
        throw new Error("Método query() debe ser implementado por las subclases.");
    }

    disconnect() {
        throw new Error("Método disconnect() debe ser implementado por las subclases.");
    }
}

// A continuación, definimos nuestras clases concretas que implementan la interfaz DatabaseConnection para cada base de datos:

class MySQLConnection extends DatabaseConnection {
    connect() {
        console.log("Conectando a la base de datos MySQL...");
    }

    query(sql) {
        console.log(`Ejecutando la consulta SQL en la base de datos MySQL: ${sql}`);
    }

    disconnect() {
        console.log("Desconectando de la base de datos MySQL...");
    }
}

class PostgreSQLConnection extends DatabaseConnection {
    connect() {
        console.log("Conectando a la base de datos PostgreSQL...");
    }

    query(sql) {
        console.log(`Ejecutando la consulta SQL en la base de datos PostgreSQL: ${sql}`);
    }

    disconnect() {
        console.log("Desconectando de la base de datos PostgreSQL...");
    }
}

class MongoDBConnection extends DatabaseConnection {
    connect() {
        console.log("Conectando a la base de datos MongoDB...");
    }

    query(sql) {
        console.log(`Ejecutando la consulta SQL en la base de datos MongoDB: ${sql}`);
    }

    disconnect() {
        console.log("Desconectando de la base de datos MongoDB...");
    }
}

// Luego, definimos nuestro Factory que se encargará de crear las conexiones a las bases de datos:

class DatabaseConnectionFactory {
    static createConnection(databaseType) {
        switch (databaseType) {
            case "MySQL":
                return new MySQLConnection();
            case "PostgreSQL":
                return new PostgreSQLConnection();
            case "MongoDB":
                return new MongoDBConnection();
            default:
                throw new Error(`Tipo de base de datos no soportado: ${databaseType}`);
        }
    }
}

// Finalmente, podemos utilizar el patrón Factory para crear conexiones a diferentes bases de datos:

const mysqlConnection = DatabaseConnectionFactory.createConnection("MySQL");
mysqlConnection.connect();
mysqlConnection.query("SELECT * FROM users");
mysqlConnection.disconnect();

const postgresqlConnection = DatabaseConnectionFactory.createConnection("PostgreSQL");
postgresqlConnection.connect();
postgresqlConnection.query("SELECT * FROM users");
postgresqlConnection.disconnect();

const mongodbConnection = DatabaseConnectionFactory.createConnection("MongoDB");
mongodbConnection.connect();
mongodbConnection.query("db.users.find()");
mongodbConnection.disconnect();