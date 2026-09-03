/**
 * Patrón State - Reproductor de Música con Estados
 * 
 * Permite que un objeto cambie su comportamiento cuando cambia su estado interno.
 * 
 * Caso de uso: Reproductor de música con estados Reproduciendo, Pausado y Detenido.
 */

// Contexto: Reproductor de música
class MusicPlayer {
  private state: MusicState;

  constructor() {
    this.state = new StoppedState(this);
  }

  setState(state: MusicState): void {
    this.state = state;
  }

  play(): void {
    this.state.play();
  }

  pause(): void {
    this.state.pause();
  }

  stop(): void {
    this.state.stop();
  }
}

// Interfaz de estado
interface MusicState {
  play(): void;
  pause(): void;
  stop(): void;
}

// Estado concreto: Reproduciendo
class PlayingState implements MusicState {
  private player: MusicPlayer;

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    console.log('El reproductor ya está reproduciendo música.');
  }

  pause(): void {
    console.log('Pausando la reproducción de música.');
    this.player.setState(new PausedState(this.player));
  }

  stop(): void {
    console.log('Deteniendo la reproducción de música.');
    this.player.setState(new StoppedState(this.player));
  }
}

// Estado concreto: Pausado
class PausedState implements MusicState {
  private player: MusicPlayer;

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    console.log('Reanudando la reproducción de música.');
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    console.log('La reproducción de música ya está en pausa.');
  }

  stop(): void {
    console.log('Deteniendo la reproducción de música.');
    this.player.setState(new StoppedState(this.player));
  }
}

// Estado concreto: Detenido
class StoppedState implements MusicState {
  private player: MusicPlayer;

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    console.log('Iniciando la reproducción de música.');
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    console.log('La reproducción de música está detenida, no se puede pausar.');
  }

  stop(): void {
    console.log('La reproducción de música ya está detenida.');
  }
}

// Uso del patrón State
const player: MusicPlayer = new MusicPlayer();

player.play(); // Iniciando la reproducción de música.
player.pause(); // Pausando la reproducción de música.
player.play(); // Reanudando la reproducción de música.
player.stop(); // Deteniendo la reproducción de música.

/**
 * Beneficios del patrón State:
 * - Gestiona comportamientos dependientes del estado
 * - Facilita la adición de nuevos estados
 * - Evita condicionales complejas basadas en el estado
 */
