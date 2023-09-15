/***

    Imaginemos que estamos construyendo una aplicación de reproducción de videos en línea. 
    Tenemos una clase Video que representa un video y queremos agregar una funcionalidad adicional 
    al reproducir los videos, como el control de acceso o el registro de reproducciones.

    Aquí es donde el patrón Proxy puede ser útil. 
    Podemos utilizar el patrón Proxy para envolver la clase Video y agregar la funcionalidad 
    adicional sin modificar la clase base.

*/

// Comencemos definiendo nuestra clase Video:

class Video {
    constructor(title) {
        this.title = title;
    }

    play() {
        console.log(`Reproduciendo el video: ${this.title}`);
    }
}

// A continuación, definimos nuestro Proxy que envuelve la clase Video y agrega la funcionalidad adicional:

class VideoProxy {
    constructor(video) {
        this.video = video;
        this.access = false;
        this.views = 0;
    }

    play() {
        if (this.access) {
            this.video.play();
            this.views++;
        } else {
            console.log("Acceso denegado. Debes iniciar sesión para reproducir el video.");
        }
    }

    grantAccess() {
        this.access = true;
        console.log("Acceso concedido. Ahora puedes reproducir el video.");
    }

    getViews() {
        return this.views;
    }
}

// Finalmente, podemos utilizar el patrón Proxy para reproducir videos con funcionalidad adicional:

const video = new Video("Video de ejemplo");
const videoProxy = new VideoProxy(video);

videoProxy.play(); // Acceso denegado. Debes iniciar sesión para reproducir el video.

videoProxy.grantAccess(); // Acceso concedido. Ahora puedes reproducir el video.
videoProxy.play(); // Reproduciendo el video: Video de ejemplo
console.log(videoProxy.getViews()); // 1

videoProxy.play(); // Reproduciendo el video: Video de ejemplo
console.log(videoProxy.getViews()); // 2

/***

        En este ejemplo, el patrón Proxy nos permite agregar funcionalidad adicional 
        al reproducir videos sin modificar la clase base Video. 
        El Proxy VideoProxy envuelve la clase Video y agrega la funcionalidad 
        de control de acceso y registro de reproducciones.

*/