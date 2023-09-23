# Definimos nuestra clase NewsPublisher que actuará como el sujeto observado
class NewsPublisher:
    def __init__(self):
        self.subscribers = {}

    def subscribe(self, category, subscriber):
        if category not in self.subscribers:
            self.subscribers[category] = []
        self.subscribers[category].append(subscriber)

    def unsubscribe(self, category, subscriber):
        if category in self.subscribers:
            self.subscribers[category].remove(subscriber)

    def publish(self, category, news):
        if category in self.subscribers:
            for subscriber in self.subscribers[category]:
                subscriber.update(news)

# Definimos nuestra clase Subscriber que representará a los usuarios que desean recibir notificaciones de noticias
class Subscriber:
    def __init__(self, name):
        self.name = name

    def update(self, news):
        print(f"{self.name} received news: {news}")

# Utilizamos el patrón Observer en nuestro sistema de suscripción a noticias
news_publisher = NewsPublisher()

subscriber1 = Subscriber("User 1")
subscriber2 = Subscriber("User 2")

news_publisher.subscribe("Sports", subscriber1)
news_publisher.subscribe("Technology", subscriber2)

news_publisher.publish("Sports", "New sports news published!")
news_publisher.publish("Technology", "New technology news published!")