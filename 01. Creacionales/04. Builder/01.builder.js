// Creamos una clase Builder para construir objetos complejos paso a paso
class Builder {
    constructor() {
        this.product = {};
    }
    
    setProperty1(value) {
        this.product.property1 = value;
        return this;
    }
    
    setProperty2(value) {
        this.product.property2 = value;
        return this;
    }
    
    setProperty3(value) {
        this.product.property3 = value;
        return this;
    }
    
    build() {
        return this.product;
    }
}

// Creamos una instancia del Builder y construimos el objeto paso a paso
const builder = new Builder();
const product = builder.setProperty1("Valor 1")
                        .setProperty2("Valor 2")
                        .setProperty3("Valor 3")
                        .build();
  
  console.log(product);