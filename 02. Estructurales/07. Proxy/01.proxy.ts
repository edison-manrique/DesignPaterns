/**
 * Patrón Proxy - Control de Acceso a Videos
 * 
 * Proporciona un sustituto o marcador de posición para controlar el acceso a un objeto.
 * 
 * Caso de uso: Aplicación de reproducción de videos con control de acceso
 * y registro de reproducciones.
 */

// Sujeto real
class Video {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  play(): void {
    console.log(`Reproduciendo el video: ${this.title}`);
  }
}

// Proxy que controla el acceso
class VideoProxy {
  private video: Video;
  private access: boolean = false;
  private views: number = 0;

  constructor(video: Video) {
    this.video = video;
  }

  play(): void {
    if (this.access) {
      this.video.play();
      this.views++;
    } else {
      console.log('Acceso denegado. Debes iniciar sesión para reproducir el video.');
    }
  }

  grantAccess(): void {
    this.access = true;
    console.log('Acceso concedido. Ahora puedes reproducir el video.');
  }

  getViews(): number {
    return this.views;
  }
}

// Uso del patrón Proxy
const video: Video = new Video('Video de ejemplo');
const videoProxy: VideoProxy = new VideoProxy(video);

videoProxy.play(); // Acceso denegado. Debes iniciar sesión para reproducir el video.

videoProxy.grantAccess(); // Acceso concedido. Ahora puedes reproducir el video.
videoProxy.play(); // Reproduciendo el video: Video de ejemplo
console.log(videoProxy.getViews()); // 1

videoProxy.play(); // Reproduciendo el video: Video de ejemplo
console.log(videoProxy.getViews()); // 2

/**
 * Beneficios del patrón Proxy:
 * - Controla el acceso al objeto real
 * - Permite añadir funcionalidad sin modificar el sujeto
 * - Útil para lazy loading, caching, logging, seguridad
 */
