/**
 * Patrón Bridge - Sistema de Reproducción Multimedia
 * 
 * Separa una abstracción de su implementación para que puedan variar independientemente.
 * 
 * Caso de uso: Sistema de reproducción de medios con diferentes tipos de archivos
 * (música, video) y diferentes reproductores (audio, video).
 */

// Implementación de reproductor
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

// Implementación concreta: Reproductor de Audio
class AudioPlayer implements MediaPlayer {
  play(): void {
    console.log('Reproduciendo audio...');
  }

  pause(): void {
    console.log('Pausando audio...');
  }

  stop(): void {
    console.log('Deteniendo audio...');
  }
}

// Implementación concreta: Reproductor de Video
class VideoPlayer implements MediaPlayer {
  play(): void {
    console.log('Reproduciendo video...');
  }

  pause(): void {
    console.log('Pausando video...');
  }

  stop(): void {
    console.log('Deteniendo video...');
  }
}

// Abstracción que usa la implementación
class MediaFile {
  protected player: MediaPlayer;

  constructor(player: MediaPlayer) {
    this.player = player;
  }

  play(): void {
    this.player.play();
  }

  pause(): void {
    this.player.pause();
  }

  stop(): void {
    this.player.stop();
  }
}

// Uso del patrón Bridge
const audioFile: MediaFile = new MediaFile(new AudioPlayer());
audioFile.play(); // Reproduciendo audio...

const videoFile: MediaFile = new MediaFile(new VideoPlayer());
videoFile.play(); // Reproduciendo video...

/**
 * Beneficios del patrón Bridge:
 * - Permite variar abstracción e implementación independientemente
 * - Facilita la extensión del sistema
 * - Oculta detalles de implementación al cliente
 */
