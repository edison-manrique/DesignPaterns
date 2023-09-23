# Implementación de reproductor de audio
class AudioPlayer:
    def play(self):
        print("Reproduciendo audio...")

    def pause(self):
        print("Pausando audio...")

    def stop(self):
        print("Deteniendo audio...")

# Implementación de reproductor de video
class VideoPlayer:
    def play(self):
        print("Reproduciendo video...")

    def pause(self):
        print("Pausando video...")

    def stop(self):
        print("Deteniendo video...")

# Definimos nuestra clase abstracta de archivo multimedia
class MediaFile:
    def __init__(self, player):
        self.player = player

    def play(self):
        self.player.play()

    def pause(self):
        self.player.pause()

    def stop(self):
        self.player.stop()

# Utilizamos el patrón Bridge para reproducir diferentes tipos de archivos multimedia con diferentes reproductores

# Crear una instancia de archivo de música con reproductor de audio
audio_file = MediaFile(AudioPlayer())
audio_file.play()

# Crear una instancia de archivo de video con reproductor de video
video_file = MediaFile(VideoPlayer())
video_file.play()