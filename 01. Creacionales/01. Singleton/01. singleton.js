// definimos la clase
class Singleton {

    // creamos la variable para guardar la instancia
    static instance

    constructor(){
        // verificamos si hay una instancia ya creada
        if(this.constructor.instance) return this.constructor.instance // retornamos la instancia previamente creada
        // si no hay una instancia previa guardamos la instancia
        this.constructor.instance = this
    }

}

// creamos dos instancias 
const instanciaPrincipal = new Singleton()
const instanciaSecundaria = new Singleton()

// comprobamos si es un singleton
console.log(`Es un singleton? ${ instanciaPrincipal === instanciaSecundaria }`) // Es un singleton? true