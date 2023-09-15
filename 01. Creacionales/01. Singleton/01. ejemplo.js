class Singleton {

    static instance

    constructor(){
        if(this.constructor.instance) return this.constructor.instance
        this.constructor.instance = this
    }

}


const instanciaPrincipal = new Singleton()
const instanciaSecundaria = new Singleton()

console.log(`Es un singleton? ${ instanciaPrincipal === instanciaSecundaria }`) // Es un singleton? true