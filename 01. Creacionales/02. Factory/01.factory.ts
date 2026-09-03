/**
 * Patrón Factory - Fábrica de Conexiones a Bases de Datos
 * 
 * Proporciona una interfaz para crear objetos sin especificar sus clases concretas.
 * 
 * Caso de uso: Aplicación que necesita conectarse a diferentes bases de datos
 * (MySQL, PostgreSQL, MongoDB) con una interfaz común.
 */

// Interfaz común para conexiones a bases de datos
interface DatabaseConnection {
  connect(): void;
  query(sql: string): void;
  disconnect(): void;
}

// Implementación concreta para MySQL
class MySQLConnection implements DatabaseConnection {
  connect(): void {
    console.log('Conectando a la base de datos MySQL...');
  }

  query(sql: string): void {
    console.log(`Ejecutando la consulta SQL en la base de datos MySQL: ${sql}`);
  }

  disconnect(): void {
    console.log('Desconectando de la base de datos MySQL...');
  }
}

// Implementación concreta para PostgreSQL
class PostgreSQLConnection implements DatabaseConnection {
  connect(): void {
    console.log('Conectando a la base de datos PostgreSQL...');
  }

  query(sql: string): void {
    console.log(`Ejecutando la consulta SQL en la base de datos PostgreSQL: ${sql}`);
  }

  disconnect(): void {
    console.log('Desconectando de la base de datos PostgreSQL...');
  }
}

// Implementación concreta para MongoDB
class MongoDBConnection implements DatabaseConnection {
  connect(): void {
    console.log('Conectando a la base de datos MongoDB...');
  }

  query(sql: string): void {
    console.log(`Ejecutando la consulta SQL en la base de datos MongoDB: ${sql}`);
  }

  disconnect(): void {
    console.log('Desconectando de la base de datos MongoDB...');
  }
}

// Tipo para las claves del factory
type DatabaseType = 'MySQL' | 'PostgreSQL' | 'MongoDB';

// Factory que crea conexiones a bases de datos
class DatabaseConnectionFactory {
  static createConnection(databaseType: DatabaseType): DatabaseConnection {
    switch (databaseType) {
      case 'MySQL':
        return new MySQLConnection();
      case 'PostgreSQL':
        return new PostgreSQLConnection();
      case 'MongoDB':
        return new MongoDBConnection();
      default:
        throw new Error(`Tipo de base de datos no soportado: ${databaseType}`);
    }
  }
}

// Uso del patrón Factory
const mysqlConnection = DatabaseConnectionFactory.createConnection('MySQL');
mysqlConnection.connect();
mysqlConnection.query('SELECT * FROM users');
mysqlConnection.disconnect();

const postgresqlConnection = DatabaseConnectionFactory.createConnection('PostgreSQL');
postgresqlConnection.connect();
postgresqlConnection.query('SELECT * FROM users');
postgresqlConnection.disconnect();

const mongodbConnection = DatabaseConnectionFactory.createConnection('MongoDB');
mongodbConnection.connect();
mongodbConnection.query('db.users.find()');
mongodbConnection.disconnect();

/**
 * Beneficios del patrón Factory:
 * - Centraliza la lógica de creación de objetos
 * - Facilita la adición de nuevos tipos sin modificar el código cliente
 * - Promueve el principio de inversión de dependencias
 */
