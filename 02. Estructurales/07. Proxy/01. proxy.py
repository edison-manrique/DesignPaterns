# Definimos nuestra clase Video
class Video:
    def __init__(self, title):
        self.title = title

    def play(self):
        print(f"Reproduciendo el video: {self.title}")

# Definimos nuestro Proxy que envuelve la clase Video y agrega funcionalidad adicional
class VideoProxy:
    def __init__(self, video):
        self.video = video
        self.access = False
        self.views = 0

    def play(self):
        if self.access:
            self.video.play()
            self.views += 1
        else:
            print("Acceso denegado. Debes iniciar sesión para reproducir el video.")

    def grant_access(self):
        self.access = True
        print("Acceso concedido. Ahora puedes reproducir el video.")

    def get_views(self):
        return self.views

# Utilizamos el patrón Proxy para reproducir videos con funcionalidad adicional
video = Video("Video de ejemplo")
video_proxy = VideoProxy(video)

video_proxy.play() # Acceso denegado. Debes iniciar sesión para reproducir el video.

video_proxy.grant_access() # Acceso concedido. Ahora puedes reproducir el video.
video_proxy.play() # Reproduciendo el video: Video de ejemplo
print(video_proxy.get_views()) # 1

video_proxy.play() # Reproduciendo el video: Video de ejemplo
print(video_proxy.get_views()) # 2