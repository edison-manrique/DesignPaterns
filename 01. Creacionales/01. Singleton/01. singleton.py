class UserDatabase:
    def __init__(self):
        self.users = []

    def add_user(self, user):
        self.users.append(user)
        print(f"Usuario {user} agregado a la base de datos.")

    def get_users(self):
        return self.users


class SingletonUserDatabase:
    _instance = None

    def __new__(cls):
        if not cls._instance:
            cls._instance = UserDatabase()
        return cls._instance


user_database_instance1 = SingletonUserDatabase()
user_database_instance2 = SingletonUserDatabase()

print(user_database_instance1 is user_database_instance2)  # True

user_database_instance1.add_user("John")  # Usuario John agregado a la base de datos.
user_database_instance2.add_user("Jane")  # Usuario Jane agregado a la base de datos.

print(user_database_instance1.get_users())  # ["John", "Jane"]
print(user_database_instance2.get_users())  # ["John", "Jane"]