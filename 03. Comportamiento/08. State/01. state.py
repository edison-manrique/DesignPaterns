# Comencemos definiendo nuestra clase MusicPlayer que actuará como el contexto que utiliza el patrón State:
class MusicPlayer:
    def __init__(self):
        self.state = StoppedState(self)

    def set_state(self, state):
        self.state = state

    def play(self):
        self.state.play()

    def pause(self):
        self.state.pause()

    def stop(self):
        self.state.stop()

# Ahora, definamos nuestras clases de estado que representarán los diferentes estados del reproductor de música:
class PlayingState:
    def __init__(self, player):
        self.player = player

    def play(self):
        print("El reproductor ya está reproduciendo música.")

    def pause(self):
        print("Pausando la reproducción de música.")
        self.player.set_state(PausedState(self.player))

    def stop(self):
        print("Deteniendo la reproducción de música.")
        self.player.set_state(StoppedState(self.player))

class PausedState:
    def __init__(self, player):
        self.player = player

    def play(self):
        print("Reanudando la reproducción de música.")
        self.player.set_state(PlayingState(self.player))

    def pause(self):
        print("La reproducción de música ya está en pausa.")

    def stop(self):
        print("Deteniendo la reproducción de música.")
        self.player.set_state(StoppedState(self.player))

class StoppedState:
    def __init__(self, player):
        self.player = player

    def play(self):
        print("Iniciando la reproducción de música.")
        self.player.set_state(PlayingState(self.player))

    def pause(self):
        print("La reproducción de música está detenida, no se puede pausar.")

    def stop(self):
        print("La reproducción de música ya está detenida.")

# Ahora, veamos cómo utilizar el patrón State en nuestro reproductor de música:
player = MusicPlayer()

player.play()  # Iniciando la reproducción de música.
player.pause()  # Pausando la reproducción de música.
player.play()  # Reanudando la reproducción de música.
player.stop()  # Deteniendo la reproducción de música.