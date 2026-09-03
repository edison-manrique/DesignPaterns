/**
 * Patrón Observer - Sistema de Suscripción a Noticias
 * 
 * Define una dependencia uno a muchos entre objetos.
 * 
 * Caso de uso: Sistema de suscripción a noticias donde los usuarios reciben
 * actualizaciones cuando se publican nuevas noticias en categorías específicas.
 */

// Tipo para las categorías de noticias
type NewsCategory = string;

// Suscriptor
interface Subscriber {
  update(news: string): void;
}

// Publicador de noticias (Sujeto)
class NewsPublisher {
  private subscribers: Map<NewsCategory, Set<Subscriber>> = new Map();

  subscribe(category: NewsCategory, subscriber: Subscriber): void {
    if (!this.subscribers.has(category)) {
      this.subscribers.set(category, new Set());
    }
    this.subscribers.get(category)!.add(subscriber);
  }

  unsubscribe(category: NewsCategory, subscriber: Subscriber): void {
    if (this.subscribers.has(category)) {
      this.subscribers.get(category)!.delete(subscriber);
    }
  }

  publish(category: NewsCategory, news: string): void {
    const subscribers = this.subscribers.get(category);
    if (subscribers) {
      subscribers.forEach((subscriber) => subscriber.update(news));
    }
  }
}

// Suscriptor concreto
class SubscriberImpl implements Subscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(news: string): void {
    console.log(`${this.name} received news: ${news}`);
  }
}

// Uso del patrón Observer
const newsPublisher: NewsPublisher = new NewsPublisher();

const subscriber1: Subscriber = new SubscriberImpl('User 1');
const subscriber2: Subscriber = new SubscriberImpl('User 2');

newsPublisher.subscribe('Sports', subscriber1);
newsPublisher.subscribe('Technology', subscriber2);

newsPublisher.publish('Sports', 'New sports news published!');
newsPublisher.publish('Technology', 'New technology news published!');

/**
 * Beneficios del patrón Observer:
 * - Establece relaciones flexibles entre objetos
 * - Notifica automáticamente a los observadores
 * - Facilita sistemas de eventos y suscripciones
 */
