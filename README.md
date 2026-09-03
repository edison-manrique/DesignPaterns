# Design Patterns in TypeScript

Una colección completa y didáctica de **Patrones de Diseño** implementados en **TypeScript**, diseñada específicamente para desarrolladores que quieren aprender y dominar estos conceptos fundamentales de la ingeniería de software.

## 📚 ¿Qué son los Patrones de Diseño?

Los patrones de diseño son soluciones probadas y reutilizables a problemas comunes en el desarrollo de software. No son código específico que puedas copiar y pegar directamente, sino **plantillas conceptuales** que te ayudan a estructurar tu código de manera más eficiente, mantenible y escalable.

### ¿Por qué aprenderlos?
- ✅ **Código más limpio**: Estructuras probadas que facilitan la lectura y mantenimiento.
- ✅ **Mejor comunicación**: Te permiten hablar con otros desarrolladores usando un vocabulario común.
- ✅ **Resolución de problemas**: Ofrecen soluciones ya validadas a desafíos recurrentes.
- ✅ **Escalabilidad**: Ayudan a construir sistemas que crecen de manera ordenada.

---

## 🗂️ Estructura del Proyecto

El proyecto está organizado en tres categorías principales según la clasificación clásica de los patrones de diseño:

### 1. Patrones Creacionales (5)
Se enfocan en los mecanismos de creación de objetos, aumentando la flexibilidad y reutilización del código.

| Patrón | Descripción | Caso de Uso |
|--------|-------------|-------------|
| **Singleton** | Garantiza una única instancia de una clase | Configuraciones globales, conexiones a BD |
| **Factory Method** | Define una interfaz para crear objetos, dejando que las subclases decidan | Sistemas que necesitan extensibilidad |
| **Abstract Factory** | Proporciona una interfaz para crear familias de objetos relacionados | UI multi-plataforma, temas |
| **Builder** | Construye objetos complejos paso a paso | Objetos con muchos parámetros opcionales |
| **Prototype** | Crea nuevos objetos copiando un prototipo existente | Clonación de objetos complejos |

### 2. Patrones Estructurales (7)
Explican cómo ensamblar objetos y clases para formar estructuras más grandes, manteniendo la flexibilidad y eficiencia.

| Patrón | Descripción | Caso de Uso |
|--------|-------------|-------------|
| **Adapter** | Permite que interfaces incompatibles trabajen juntas | Integración de librerías de terceros |
| **Bridge** | Separa una abstracción de su implementación | Múltiples plataformas/implementaciones |
| **Composite** | Compone objetos en estructuras de árbol | Estructuras jerárquicas (UI, archivos) |
| **Decorator** | Añade funcionalidad dinámicamente sin herencia | Extensión de comportamientos (logging, validación) |
| **Facade** | Proporciona una interfaz simplificada a un subsistema | Simplificación de APIs complejas |
| **Flyweight** | Reduce el costo de memoria compartiendo estados | Grandes cantidades de objetos similares |
| **Proxy** | Controla el acceso a un objeto | Lazy loading, control de acceso, caching |

### 3. Patrones de Comportamiento (11)
Se ocupan de algoritmos y asignación de responsabilidades entre objetos.

| Patrón | Descripción | Caso de Uso |
|--------|-------------|-------------|
| **Chain of Responsibility** | Pasa solicitudes a través de una cadena de manejadores | Middleware, validaciones en cascada |
| **Command** | Encapsula una solicitud como un objeto | Deshacer/rehacer, colas de tareas |
| **Iterator** | Recorre elementos de una colección sin exponer su estructura | Acceso secuencial a colecciones |
| **Mediator** | Centraliza la comunicación entre objetos | Chat, coordinación de componentes UI |
| **Memento** | Guarda y restaura el estado de un objeto | Snapshots, historial de estados |
| **Observer** | Notifica cambios a múltiples observadores | Eventos, reactividad, pub/sub |
| **State** | Cambia el comportamiento según el estado interno | Máquinas de estado, flujos de trabajo |
| **Strategy** | Define una familia de algoritmos intercambiables | Diferentes estrategias de pago, ordenamiento |
| **Template Method** | Define el esqueleto de un algoritmo | Frameworks con pasos personalizables |
| **Visitor** | Separa algoritmos de la estructura de objetos | Operaciones sobre estructuras complejas |
| **Interpreter** | Define una gramática e interpreta sentencias | Parsers, lenguajes de dominio específico |

---

## 🚀 Cómo Usar Este Proyecto

### Requisitos Previos
- **Node.js** (v14 o superior)
- **npm** o **yarn**
- Conocimientos básicos de **TypeScript** y **Programación Orientada a Objetos**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/edison-manrique/DesignPaterns.git
cd DesignPaterns

# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar un patrón específico
npm run run:singleton
npm run run:factory
# ... etc
```

### Estructura de Archivos

Cada patrón tiene su propia carpeta con:
- `index.ts`: Implementación principal del patrón
- Ejemplos claros y comentados
- Casos de uso prácticos

```
src/
├── creational/
│   ├── singleton/
│   ├── factory-method/
│   ├── abstract-factory/
│   ├── builder/
│   └── prototype/
├── structural/
│   ├── adapter/
│   ├── bridge/
│   ├── composite/
│   ├── decorator/
│   ├── facade/
│   ├── flyweight/
│   └── proxy/
└── behavioral/
    ├── chain-of-responsibility/
    ├── command/
    ├── iterator/
    ├── mediator/
    ├── memento/
    ├── observer/
    ├── state/
    ├── strategy/
    ├── template-method/
    ├── visitor/
    └── interpreter/
```

---

## 📖 Ejemplo Rápido: Patrón Singleton

El patrón **Singleton** asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.

```typescript
// src/creational/singleton/index.ts

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  // Constructor privado para evitar instanciación directa
  private constructor() {}

  // Método estático para obtener la única instancia
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log('🔌 Nueva conexión a la base de datos creada');
    }
    return DatabaseConnection.instance;
  }

  public connect(): void {
    if (!this.connected) {
      this.connected = true;
      console.log('✅ Conectado a la base de datos');
    } else {
      console.log('ℹ️ Ya estaba conectado');
    }
  }

  public query(sql: string): void {
    if (this.connected) {
      console.log(`🔍 Ejecutando: ${sql}`);
    } else {
      console.log('❌ Error: No hay conexión');
    }
  }
}

// Uso
const db1 = DatabaseConnection.getInstance();
db1.connect(); // 🔌 Nueva conexión... ✅ Conectado

const db2 = DatabaseConnection.getInstance();
db2.query('SELECT * FROM users'); // 🔍 Ejecutando: SELECT * FROM users

console.log(db1 === db2); // true (misma instancia)
```

**Salida:**
```
🔌 Nueva conexión a la base de datos creada
✅ Conectado a la base de datos
ℹ️ Ya estaba conectado
🔍 Ejecutando: SELECT * FROM users
true
```

---

## 🎯 Beneficios de Esta Implementación

- **Tipado Estático Completo**: Aprovecha todo el poder de TypeScript para detectar errores en tiempo de compilación.
- **Código Comentado**: Cada línea importante tiene comentarios explicativos.
- **Ejemplos Prácticos**: Casos de uso reales y fáciles de entender.
- **Documentación JSDoc**: Compatible con generadores de documentación automática.
- **Sin Dependencias Innecesarias**: Código puro y fácil de estudiar.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores, tienes sugerencias o quieres agregar más ejemplos:

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'feat: agrega nuevo ejemplo'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo para aprender y en tus propios proyectos.

---

## 🙏 Agradecimientos

- A la comunidad de desarrolladores que mantiene vivos estos conceptos fundamentales.
- A todos los estudiantes y profesionales que buscan mejorar sus habilidades en diseño de software.

---

**¡Happy Coding! 🚀**

*Si este proyecto te ayudó, por favor dale una ⭐ en GitHub.*
