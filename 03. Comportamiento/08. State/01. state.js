/***

Imaginemos que tenemos una aplicación de reproducción de música donde queremos implementar 
diferentes estados para el reproductor de música, como "Reproduciendo", "Pausado" y "Detenido". 
Queremos utilizar el patrón State para gestionar de manera eficiente los diferentes comportamientos 
y transiciones entre estos estados.

El patrón State nos permite encapsular los diferentes comportamientos de un objeto en diferentes 
clases de estado, lo que facilita la adición de nuevos estados y la gestión de las transiciones entre ellos.

*/

// Comencemos definiendo nuestra clase MusicPlayer que actuará como el contexto que utiliza el patrón State:

class MusicPlayer {
    constructor() {
        this.state = new StoppedState(this);
    }

    setState(state) {
        this.state = state;
    }

    play() {
        this.state.play();
    }

    pause() {
        this.state.pause();
    }

    stop() {
        this.state.stop();
    }
}

/***

En este ejemplo, la clase MusicPlayer tiene una propiedad state que representa el estado actual del reproductor de música. 
Implementamos el método setState(state) para cambiar el estado del reproductor, y los métodos play(), pause() y stop() 
que delegan el comportamiento al estado actual.

*/

// Ahora, definamos nuestras clases de estado que representarán los diferentes estados del reproductor de música:

class PlayingState {
    constructor(player) {
        this.player = player;
    }

    play() {
        console.log("El reproductor ya está reproduciendo música.");
    }

    pause() {
        console.log("Pausando la reproducción de música.");
        this.player.setState(new PausedState(this.player));
    }

    stop() {
        console.log("Deteniendo la reproducción de música.");
        this.player.setState(new StoppedState(this.player));
    }
}

class PausedState {
    constructor(player) {
        this.player = player;
    }

    play() {
        console.log("Reanudando la reproducción de música.");
        this.player.setState(new PlayingState(this.player));
    }

    pause() {
        console.log("La reproducción de música ya está en pausa.");
    }

    stop() {
        console.log("Deteniendo la reproducción de música.");
        this.player.setState(new StoppedState(this.player));
    }
}

class StoppedState {
    constructor(player) {
        this.player = player;
    }

    play() {
        console.log("Iniciando la reproducción de música.");
        this.player.setState(new PlayingState(this.player));
    }

    pause() {
        console.log("La reproducción de música está detenida, no se puede pausar.");
    }

    stop() {
        console.log("La reproducción de música ya está detenida.");
    }
}

/***

En este ejemplo, cada clase de estado (PlayingState, PausedState y StoppedState) implementa los mismos 
métodos play(), pause() y stop(), pero con comportamientos diferentes según el estado actual. 
Por ejemplo, en el estado PlayingState, el método play() no hace nada porque el reproductor ya está 
reproduciendo música, mientras que en el estado PausedState, el método play() reanuda la reproducción de música.

*/

// Ahora, veamos cómo utilizar el patrón State en nuestro reproductor de música:

const player = new MusicPlayer();

player.play(); // Iniciando la reproducción de música.
player.pause(); // Pausando la reproducción de música.
player.play(); // Reanudando la reproducción de música.
player.stop(); // Deteniendo la reproducción de música.

/***

En este ejemplo, creamos una instancia de MusicPlayer y utilizamos los métodos play(), pause() y stop() 
para interactuar con el reproductor de música. Dependiendo del estado actual, los métodos llamarán al 
comportamiento correspondiente en la clase de estado actual.

El patrón State nos permite gestionar de manera eficiente los diferentes comportamientos y transiciones 
entre estados en un objeto. Esto facilita la adición de nuevos estados y la gestión de las transiciones 
en una aplicación.

*/