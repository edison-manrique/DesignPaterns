/*
En este ejemplo, tenemos las clases MySQLConnection y PostgreSQLConnection que representan conexiones 
a bases de datos MySQL y PostgreSQL respectivamente. Luego, tenemos la clase DBConnectionFactory que 
tiene un método createConnection que crea y devuelve una instancia de la conexión a la base de datos 
correspondiente según el tipo proporcionado.

Este ejemplo ilustra cómo un Factory puede ser útil para encapsular la lógica de creación 
de objetos y permitir la creación de diferentes tipos de objetos de manera más sencilla y flexible.
*/


class MySQLConnection {
	constructor(config) {
		this.config = config;
	}

	connect() {
		console.log('Conexión a MySQL establecida');
	}
}


class PostgreSQLConnection {
	constructor(config) {
		this.config = config;
	}

	connect() {
		console.log('Conexión a PostgreSQL establecida');
	}
}


class DBConnectionFactory {
	createConnection(type, config) {
		switch (type) {
			case 'mysql':
				return new MySQLConnection(config);
			case 'postgresql':
				return new PostgreSQLConnection(config);
			default:
				throw new Error('Tipo de base de datos no válido');
		}
	}
}
  
  // Uso del Factory
  const factory = new DBConnectionFactory();
  
  const mysqlConnection = factory.createConnection('mysql', { host: 'localhost', user: 'root', password: '123456' });
  mysqlConnection.connect(); // Conexión a MySQL establecida
  
  const postgresqlConnection = factory.createConnection('postgresql', { host: 'localhost', user: 'admin', password: 'password' });
  postgresqlConnection.connect(); // Conexión a PostgreSQL establecida