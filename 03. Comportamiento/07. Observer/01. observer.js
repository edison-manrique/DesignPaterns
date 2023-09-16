/***

Imaginemos que tenemos un sistema de suscripción a noticias donde diferentes usuarios pueden suscribirse 
para recibir actualizaciones cuando se publiquen nuevas noticias en diferentes categorías. 
Queremos implementar un patrón Observer que permita a los usuarios suscribirse y recibir notificaciones 
cuando se publiquen noticias en las categorías a las que están suscritos.

Aquí es donde el patrón Observer puede ser útil. 
Podemos utilizar el patrón Observer para establecer una relación de uno a muchos entre 
un objeto "sujeto" (el sistema de noticias) y varios objetos "observadores" (los usuarios), 
de modo que los observadores sean notificados automáticamente cuando se publiquen nuevas noticias 
en las categorías a las que están suscritos.

*/

// Comencemos definiendo nuestra clase NewsPublisher que actuará como el sujeto observado:

class NewsPublisher {
    constructor() {
        this.subscribers = new Map();
    }

    subscribe(category, subscriber) {
        if (!this.subscribers.has(category)) {
            this.subscribers.set(category, new Set());
        }

        this.subscribers.get(category).add(subscriber);
    }

    unsubscribe(category, subscriber) {
        if (this.subscribers.has(category)) {
            this.subscribers.get(category).delete(subscriber);
        }
    }

    publish(category, news) {
        if (this.subscribers.has(category)) {
            this.subscribers.get(category).forEach(subscriber => {
                subscriber.update(news);
            });
        }
    }
}

/***

En este ejemplo, la clase NewsPublisher tiene una propiedad subscribers que es un mapa 
que almacena los suscriptores agrupados por categoría de noticias. Implementamos los métodos 
subscribe(category, subscriber) para que los suscriptores se registren en una categoría específica, 
unsubscribe(category, subscriber) para que los suscriptores cancelen su suscripción a una categoría y 
publish(category, news) para publicar una nueva noticia en una categoría específica y notificar a los 
suscriptores correspondientes.

*/

// Ahora, definamos nuestra clase Subscriber que representará a los usuarios que desean recibir notificaciones de noticias:

class Subscriber {
    constructor(name) {
        this.name = name;
    }

    update(news) {
        console.log(`${this.name} received news: ${news}`);
    }
}

/***

En este ejemplo, la clase Subscriber tiene una propiedad name que representa el nombre del suscriptor. 
Implementamos el método update(news) que se llamará cuando se publique una nueva noticia en una categoría 
a la que el suscriptor esté suscrito, y en este caso, simplemente mostraremos un mensaje en la consola.

*/

// Ahora, veamos cómo utilizar el patrón Observer en nuestro sistema de suscripción a noticias:

const newsPublisher = new NewsPublisher();

const subscriber1 = new Subscriber("User 1");
const subscriber2 = new Subscriber("User 2");

newsPublisher.subscribe("Sports", subscriber1);
newsPublisher.subscribe("Technology", subscriber2);

newsPublisher.publish("Sports", "New sports news published!");
newsPublisher.publish("Technology", "New technology news published!");

/***

En este ejemplo, creamos una instancia de NewsPublisher y varias instancias de Subscriber. 
Luego, suscribimos los suscriptores a diferentes categorías utilizando el método 
subscribe(category, subscriber) en el newsPublisher. Finalmente, publicamos nuevas noticias 
en diferentes categorías utilizando el método publish(category, news) en el newsPublisher, 
lo que activará el método update(news) en los suscriptores correspondientes.

El patrón Observer nos permite establecer una relación flexible entre un sujeto y varios observadores, 
lo que facilita la implementación de sistemas de suscripción y notificación en una aplicación.

*/