class DatabaseConnection:
    def connect(self):
        raise NotImplementedError("El método connect() debe ser implementado por las subclases.")

    def query(self, sql):
        raise NotImplementedError("El método query() debe ser implementado por las subclases.")

    def disconnect(self):
        raise NotImplementedError("El método disconnect() debe ser implementado por las subclases.")


class MySQLConnection(DatabaseConnection):
    def connect(self):
        print("Conectando a la base de datos MySQL...")

    def query(self, sql):
        print(f"Ejecutando la consulta SQL en la base de datos MySQL: {sql}")

    def disconnect(self):
        print("Desconectando de la base de datos MySQL...")


class PostgreSQLConnection(DatabaseConnection):
    def connect(self):
        print("Conectando a la base de datos PostgreSQL...")

    def query(self, sql):
        print(f"Ejecutando la consulta SQL en la base de datos PostgreSQL: {sql}")

    def disconnect(self):
        print("Desconectando de la base de datos PostgreSQL...")


class MongoDBConnection(DatabaseConnection):
    def connect(self):
        print("Conectando a la base de datos MongoDB...")

    def query(self, sql):
        print(f"Ejecutando la consulta SQL en la base de datos MongoDB: {sql}")

    def disconnect(self):
        print("Desconectando de la base de datos MongoDB...")


class DatabaseConnectionFactory:
    @staticmethod
    def create_connection(database_type):
        if database_type == "MySQL":
            return MySQLConnection()
        elif database_type == "PostgreSQL":
            return PostgreSQLConnection()
        elif database_type == "MongoDB":
            return MongoDBConnection()
        else:
            raise ValueError(f"Tipo de base de datos no soportado: {database_type}")


mysql_connection = DatabaseConnectionFactory.create_connection("MySQL")
mysql_connection.connect()
mysql_connection.query("SELECT * FROM users")
mysql_connection.disconnect()

postgresql_connection = DatabaseConnectionFactory.create_connection("PostgreSQL")
postgresql_connection.connect()
postgresql_connection.query("SELECT * FROM users")
postgresql_connection.disconnect()

mongodb_connection = DatabaseConnectionFactory.create_connection("MongoDB")
mongodb_connection.connect()
mongodb_connection.query("db.users.find()")
mongodb_connection.disconnect()