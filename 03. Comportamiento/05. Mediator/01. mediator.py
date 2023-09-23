# Definimos nuestra clase ChatMediator que actuará como el mediador
class ChatMediator:
    def __init__(self):
        self.users = []

    def add_user(self, user):
        self.users.append(user)

    def send_message(self, sender, message):
        for user in self.users:
            if user != sender:
                user.receive_message(message)

# Definimos nuestra clase User que representará a cada usuario del chat
class User:
    def __init__(self, name, mediator):
        self.name = name
        self.mediator = mediator

    def send_message(self, message):
        self.mediator.send_message(self, message)

    def receive_message(self, message):
        print(f"{self.name} received message: {message}")

# Utilizamos el patrón Mediator en nuestro chat
mediator = ChatMediator()

user1 = User("User 1", mediator)
user2 = User("User 2", mediator)
user3 = User("User 3", mediator)

mediator.add_user(user1)
mediator.add_user(user2)
mediator.add_user(user3)

user1.send_message("Hello everyone!")
user2.send_message("Hey there!")