/***

Imaginemos que estamos construyendo una aplicación de control de dispositivos domésticos inteligentes. 
Queremos implementar un sistema donde cada dispositivo pueda ser controlado mediante comandos, 
como encender, apagar, ajustar la temperatura, etc.

Aquí es donde el patrón Command puede ser útil. Podemos utilizar el patrón Command para encapsular 
cada comando en un objeto separado, permitiendo que el sistema envíe y ejecute comandos en los 
dispositivos sin conocer los detalles de implementación de cada uno.

*/

// Comencemos definiendo nuestra clase base Command que representa un comando:

class Command {
    execute() {
        throw new Error("El método execute() debe ser implementado por las subclases.");
    }
}

// A continuación, definimos nuestras clases concretas que extienden la clase base Command:

class TurnOnCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.turnOn();
    }
}

class TurnOffCommand extends Command {
    constructor(device) {
        super();
        this.device = device;
    }

    execute() {
        this.device.turnOff();
    }
}

class SetTemperatureCommand extends Command {
    constructor(device, temperature) {
        super();
        this.device = device;
        this.temperature = temperature;
    }

    execute() {
        this.device.setTemperature(this.temperature);
    }
}

// ... otras clases de comandos como AdjustVolumeCommand, ChangeChannelCommand, etc.

// Ahora podemos utilizar el patrón Command para enviar y ejecutar comandos en los dispositivos:

class Device {
    constructor(name) {
        this.name = name;
        this.isOn = false;
        this.temperature = 0;
    }

    turnOn() {
        this.isOn = true;
        console.log(`${this.name} se ha encendido.`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.name} se ha apagado.`);
    }

    setTemperature(temperature) {
        this.temperature = temperature;
        console.log(`${this.name} se ha ajustado a ${temperature} grados.`);
    }
}

const tv = new Device("Televisor");
const ac = new Device("Aire acondicionado");

const turnOnTvCommand = new TurnOnCommand(tv);
const turnOffAcCommand = new TurnOffCommand(ac);
const setTemperatureAcCommand = new SetTemperatureCommand(ac, 25);

turnOnTvCommand.execute(); // Televisor se ha encendido.
turnOffAcCommand.execute(); // Aire acondicionado se ha apagado.
setTemperatureAcCommand.execute(); // Aire acondicionado se ha ajustado a 25 grados.

/***

En este ejemplo, el patrón Command nos permite encapsular cada comando en un objeto separado 
y ejecutarlo a través del método execute(). Esto nos permite implementar un sistema flexible 
donde podemos enviar y ejecutar comandos en los dispositivos sin conocer los detalles de 
implementación de cada uno.

*/