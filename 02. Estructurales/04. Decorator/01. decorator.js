/***

    Imaginemos que estamos construyendo una aplicación de creación de perfiles de usuario. 
    Tenemos una clase base UserProfile que representa un perfil de usuario básico. 
    Queremos poder agregar funcionalidades adicionales a los perfiles de usuario, 
    como la capacidad de agregar una foto de perfil o la capacidad de agregar una descripción personalizada.

    Aquí es donde el patrón Decorator puede ser útil. 
    Podemos utilizar el patrón Decorator para agregar funcionalidades adicionales 
    a los perfiles de usuario sin modificar la clase base.

*/

// Comencemos definiendo nuestra clase base UserProfile:

class UserProfile {
    constructor(username) {
        this.username = username;
    }

    getProfile() {
        return `Perfil de usuario: ${this.username}`;
    }
}

  // A continuación, definimos nuestros decoradores que agregarán funcionalidades adicionales a los perfiles de usuario:

// Decorador para agregar una foto de perfil
class ProfilePhotoDecorator {
    constructor(userProfile, photoUrl) {
        this.userProfile = userProfile;
        this.photoUrl = photoUrl;
    }

    getProfile() {
        return `${this.userProfile.getProfile()}, Foto de perfil: ${this.photoUrl}`;
    }
}

// Decorador para agregar una descripción personalizada
class CustomDescriptionDecorator {
    constructor(userProfile, description) {
        this.userProfile = userProfile;
        this.description = description;
    }

    getProfile() {
        return `${this.userProfile.getProfile()}, Descripción: ${this.description}`;
    }
}

  // Finalmente, podemos utilizar el patrón Decorator para agregar funcionalidades adicionales a los perfiles de usuario:

// Crear un perfil de usuario básico
const basicProfile = new UserProfile("JohnDoe");
console.log(basicProfile.getProfile()); // Perfil de usuario: JohnDoe

// Agregar una foto de perfil al perfil básico
const profileWithPhoto = new ProfilePhotoDecorator(basicProfile, "https://example.com/photo.jpg");
console.log(profileWithPhoto.getProfile()); // Perfil de usuario: JohnDoe, Foto de perfil: https://example.com/photo.jpg

// Agregar una descripción personalizada al perfil básico
const profileWithDescription = new CustomDescriptionDecorator(basicProfile, "¡Hola! Soy John Doe.");
console.log(profileWithDescription.getProfile()); // Perfil de usuario: JohnDoe, Descripción: ¡Hola! Soy John Doe.

/***

    En este ejemplo, el patrón Decorator nos permite agregar funcionalidades adicionales a los perfiles de usuario 
    sin modificar la clase base UserProfile. Los decoradores ProfilePhotoDecorator y CustomDescriptionDecorator 
    envuelven la clase base y agregan la funcionalidad adicional deseada.

*/