# Definimos nuestra clase base UserProfile
class UserProfile:
    def __init__(self, username):
        self.username = username

    def get_profile(self):
        return f"Perfil de usuario: {self.username}"

# Definimos nuestro decorador para agregar una foto de perfil
class ProfilePhotoDecorator:
    def __init__(self, user_profile, photo_url):
        self.user_profile = user_profile
        self.photo_url = photo_url

    def get_profile(self):
        return f"{self.user_profile.get_profile()}, Foto de perfil: {self.photo_url}"

# Definimos nuestro decorador para agregar una descripción personalizada
class CustomDescriptionDecorator:
    def __init__(self, user_profile, description):
        self.user_profile = user_profile
        self.description = description

    def get_profile(self):
        return f"{self.user_profile.get_profile()}, Descripción: {self.description}"

# Utilizamos el patrón Decorator para agregar funcionalidades adicionales a los perfiles de usuario

# Creamos un perfil de usuario básico
basic_profile = UserProfile("JohnDoe")
print(basic_profile.get_profile()) # Perfil de usuario: JohnDoe

# Agregamos una foto de perfil al perfil básico
profile_with_photo = ProfilePhotoDecorator(basic_profile, "https://example.com/photo.jpg")
print(profile_with_photo.get_profile()) # Perfil de usuario: JohnDoe, Foto de perfil: https://example.com/photo.jpg

# Agregamos una descripción personalizada al perfil básico
profile_with_description = CustomDescriptionDecorator(basic_profile, "¡Hola! Soy John Doe.")
print(profile_with_description.get_profile()) # Perfil de usuario: JohnDoe, Descripción: ¡Hola! Soy John Doe.