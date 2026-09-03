/**
 * Patrón Decorator - Perfiles de Usuario con Funcionalidades Adicionales
 * 
 * Añade funcionalidades a objetos dinámicamente sin modificar su estructura.
 * 
 * Caso de uso: Aplicación de perfiles de usuario donde se pueden agregar
 * funcionalidades como foto de perfil o descripción personalizada.
 */

// Componente base
interface UserProfile {
  getProfile(): string;
}

// Implementación concreta del componente
class BasicUserProfile implements UserProfile {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }

  getProfile(): string {
    return `Perfil de usuario: ${this.username}`;
  }
}

// Decorador base
abstract class UserProfileDecorator implements UserProfile {
  protected userProfile: UserProfile;

  constructor(userProfile: UserProfile) {
    this.userProfile = userProfile;
  }

  getProfile(): string {
    return this.userProfile.getProfile();
  }
}

// Decorador concreto: Foto de perfil
class ProfilePhotoDecorator extends UserProfileDecorator {
  private photoUrl: string;

  constructor(userProfile: UserProfile, photoUrl: string) {
    super(userProfile);
    this.photoUrl = photoUrl;
  }

  getProfile(): string {
    return `${super.getProfile()}, Foto de perfil: ${this.photoUrl}`;
  }
}

// Decorador concreto: Descripción personalizada
class CustomDescriptionDecorator extends UserProfileDecorator {
  private description: string;

  constructor(userProfile: UserProfile, description: string) {
    super(userProfile);
    this.description = description;
  }

  getProfile(): string {
    return `${super.getProfile()}, Descripción: ${this.description}`;
  }
}

// Uso del patrón Decorator
const basicProfile: UserProfile = new BasicUserProfile('JohnDoe');
console.log(basicProfile.getProfile()); // Perfil de usuario: JohnDoe

const profileWithPhoto: UserProfile = new ProfilePhotoDecorator(
  basicProfile,
  'https://example.com/photo.jpg'
);
console.log(profileWithPhoto.getProfile());
// Perfil de usuario: JohnDoe, Foto de perfil: https://example.com/photo.jpg

const profileWithDescription: UserProfile = new CustomDescriptionDecorator(
  basicProfile,
  '¡Hola! Soy John Doe.'
);
console.log(profileWithDescription.getProfile());
// Perfil de usuario: JohnDoe, Descripción: ¡Hola! Soy John Doe.

/**
 * Beneficios del patrón Decorator:
 * - Añade responsabilidades dinámicamente sin modificar clases
 * - Alternativa flexible a la herencia
 * - Permite combinaciones ilimitadas de funcionalidades
 */
