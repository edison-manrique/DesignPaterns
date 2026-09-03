/**
 * ============================================================================
 * PATRÓN SINGLETON - Gestor de Configuración de Aplicación
 * ============================================================================
 * 
 * PROPÓSITO: Garantizar que una clase tenga UNA ÚNICA INSTANCIA en toda la 
 * aplicación y proporcionar un punto de acceso GLOBAL a ella.
 * 
 * ¿CUÁNDO USARLO?
 * - Cuando necesitas un único objeto compartido en toda tu aplicación
 * - Para gestión de configuración, logging, conexiones a BD, caché
 * - Cuando el costo de crear múltiples instancias es alto
 * 
 * ⚠️ PRECAUCIÓN: El Singleton puede dificultar el testing unitario. Considera
 * usar inyección de dependencias cuando sea posible.
 * 
 * CASO DE USO REAL: Sistema de configuración donde todas las partes de la app
 * necesitan acceder a los mismos valores (API URLs, feature flags, etc.)
 */

// ==================== CLASE PRINCIPAL: AppConfig ====================
class AppConfig {
  // Propiedades privadas que almacenan la configuración
  private config: Map<string, string | number | boolean>;
  
  // La única instancia de AppConfig (inicialmente null)
  private static instance: AppConfig | null = null;

  /**
   * Constructor PRIVADO: Evita que se creen instancias desde fuera
   * Solo getInstance() puede crear la instancia
   */
  private constructor() {
    this.config = new Map();
    console.log('🔧 [Singleton] Instancia de AppConfig creada');
    
    // Cargar configuración inicial
    this.loadDefaultConfig();
  }

  /**
   * Método PÚBLICO ESTÁTICO: Punto de acceso global a la instancia única
   * @returns La única instancia de AppConfig
   */
  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      console.log('📦 [Singleton] Creando nueva instancia...');
      AppConfig.instance = new AppConfig();
    } else {
      console.log('✅ [Singleton] Reutilizando instancia existente');
    }
    return AppConfig.instance;
  }

  /**
   * Carga configuración por defecto
   */
  private loadDefaultConfig(): void {
    this.set('apiUrl', 'https://api.example.com');
    this.set('timeout', 5000);
    this.set('debugMode', false);
    this.set('maxRetries', 3);
  }

  /**
   * Establece un valor de configuración
   */
  public set(key: string, value: string | number | boolean): void {
    this.config.set(key, value);
    console.log(`⚙️  Configuración actualizada: ${key} = ${value}`);
  }

  /**
   * Obtiene un valor de configuración con tipo seguro
   */
  public get<T extends string | number | boolean>(key: string): T | undefined {
    return this.config.get(key) as T | undefined;
  }

  /**
   * Muestra toda la configuración actual
   */
  public showConfig(): void {
    console.log('\n📋 === CONFIGURACIÓN ACTUAL ===');
    this.config.forEach((value, key) => {
      console.log(`   ${key}: ${value}`);
    });
    console.log('==============================\n');
  }
}

// ==================== DEMOSTRACIÓN DEL PATRÓN ====================

console.log('\n🚀 === INICIANDO DEMOSTRACIÓN SINGLETON ===\n');

// Primer acceso: Se crea la instancia
console.log('--- Acceso 1: Creando primera instancia ---');
const config1 = AppConfig.getInstance();
config1.showConfig();

// Segundo acceso: Se reutiliza la misma instancia
console.log('--- Acceso 2: Obteniendo segunda referencia ---');
const config2 = AppConfig.getInstance();

// Tercer acceso: Otra referencia más
console.log('--- Acceso 3: Obteniendo tercera referencia ---');
const config3 = AppConfig.getInstance();

// VERIFICACIÓN CRÍTICA: ¿Son la misma instancia?
console.log('\n🔍 === VERIFICANDO QUE ES EL MISMO OBJETO ===');
console.log(`config1 === config2: ${config1 === config2}`); // ✅ true
console.log(`config2 === config3: ${config2 === config3}`); // ✅ true
console.log(`config1 === config3: ${config1 === config3}`); // ✅ true

// Demostración: Modificar desde una referencia afecta a todas
console.log('\n🔄 === MODIFICANDO CONFIGURACIÓN DESDE config1 ===');
config1.set('debugMode', true);
config1.set('apiUrl', 'https://api.production.com');

console.log('\n👀 === LEYENDO DESDE config2 (debería ver los cambios) ===');
console.log(`Debug Mode desde config2: ${config2.get('debugMode')}`); // ✅ true
console.log(`API URL desde config2: ${config2.get('apiUrl')}`); // ✅ https://api.production.com

console.log('\n👀 === LEYENDO DESDE config3 (también debería ver los cambios) ===');
config3.showConfig();

console.log('\n💡 === CONCLUSIONES DEL PATRÓN SINGLETON ===');
console.log('✅ Solo se creó UNA instancia (verifica los logs de creación)');
console.log('✅ Todas las referencias apuntan al MISMO objeto');
console.log('✅ Los cambios desde cualquier referencia son visibles para todas');
console.log('✅ Proporciona acceso GLOBAL controlado a recursos compartidos');
console.log('=================================================================\n');

/**
 * ============================================================================
 * RESUMEN DE BENEFICIOS
 * ============================================================================
 * 
 * ✅ VENTAJAS:
 *    • Control de acceso a instancia única
 *    • Reducción de uso de memoria (una sola instancia)
 *    • Punto de acceso global bien definido
 *    • Lazy initialization (se crea cuando se necesita)
 * 
 * ⚠️ DESVENTAJAS:
 *    • Puede dificultar testing unitario
 *    • Estado global compartido (cuidado con efectos secundarios)
 *    • Viola principio de responsabilidad única en algunos casos
 * 
 * 🎯 MEJORES PRÁCTICAS:
 *    • Usar con moderación
 *    • Considerar inyección de dependencias para testing
 *    • Documentar claramente cuándo y por qué se usa
 * ============================================================================
 */
