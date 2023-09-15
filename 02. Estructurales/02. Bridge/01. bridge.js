/***

Imaginemos que estamos construyendo un sistema de reproducción de medios que puede 
reproducir diferentes tipos de archivos multimedia, como música y videos. 
Además, queremos que nuestro sistema sea compatible con diferentes reproductores, 
como reproductores de audio y reproductores de video.

Aquí es donde el patrón Bridge puede ser útil. 
Podemos utilizar el patrón Bridge para separar las abstracciones de los archivos multimedia
de las implementaciones de los reproductores.

*/


// Comencemos definiendo nuestras implementaciones de reproductores:

// Implementación de reproductor de audio
class AudioPlayer {
    play() {
        console.log("Reproduciendo audio...");
    }
    pause() {
        console.log("Pausando audio...");
    }
    stop() {
        console.log("Deteniendo audio...");
    }
}

// Implementación de reproductor de video
class VideoPlayer {
    play() {
        console.log("Reproduciendo video...");
    }
    pause() {
        console.log("Pausando video...");
    }
    stop() {
        console.log("Deteniendo video...");
    }
}

/***

A continuación, definimos nuestra clase abstracta de archivo multimedia 
que actuará como el puente entre las abstracciones de los archivos multimedia 
y las implementaciones de los reproductores:

*/

class MediaFile {
    constructor(player) {
        this.player = player;
    }

    play() {
        this.player.play();
    }

    pause() {
        this.player.pause();
    }

    stop() {
        this.player.stop();
    }
}

/***

Finalmente, podemos utilizar el patrón Bridge para reproducir 
diferentes tipos de archivos multimedia con diferentes reproductores:

*/

// Crear una instancia de archivo de música con reproductor de audio
const audioFile = new MediaFile(new AudioPlayer());
audioFile.play();

// Crear una instancia de archivo de video con reproductor de video
const videoFile = new MediaFile(new VideoPlayer());
videoFile.play();


/***

En este ejemplo, el patrón Bridge nos permite separar las abstracciones 
de los archivos multimedia de las implementaciones de los reproductores. 
Esto nos permite cambiar fácilmente los reproductores para diferentes tipos 
de archivos multimedia sin afectar el código que reproduce los archivos.

*/