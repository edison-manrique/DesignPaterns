/**
 * Patrón Command - Control de Dispositivos Domésticos Inteligentes
 * 
 * Encapsula una solicitud como un objeto.
 * 
 * Caso de uso: Aplicación de control de dispositivos domésticos con comandos
 * como encender, apagar y ajustar temperatura.
 */

// Comando abstracto
interface Command {
  execute(): void;
}

// Receptor: Dispositivo
class Device {
  private name: string;
  private isOn: boolean = false;
  private temperature: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  turnOn(): void {
    this.isOn = true;
    console.log(`${this.name} se ha encendido.`);
  }

  turnOff(): void {
    this.isOn = false;
    console.log(`${this.name} se ha apagado.`);
  }

  setTemperature(temperature: number): void {
    this.temperature = temperature;
    console.log(`${this.name} se ha ajustado a ${temperature} grados.`);
  }
}

// Comandos concretos
class TurnOnCommand implements Command {
  private device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  execute(): void {
    this.device.turnOn();
  }
}

class TurnOffCommand implements Command {
  private device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  execute(): void {
    this.device.turnOff();
  }
}

class SetTemperatureCommand implements Command {
  private device: Device;
  private temperature: number;

  constructor(device: Device, temperature: number) {
    this.device = device;
    this.temperature = temperature;
  }

  execute(): void {
    this.device.setTemperature(this.temperature);
  }
}

// Uso del patrón Command
const tv: Device = new Device('Televisor');
const ac: Device = new Device('Aire acondicionado');

const turnOnTvCommand: Command = new TurnOnCommand(tv);
const turnOffAcCommand: Command = new TurnOffCommand(ac);
const setTemperatureAcCommand: Command = new SetTemperatureCommand(ac, 25);

turnOnTvCommand.execute(); // Televisor se ha encendido.
turnOffAcCommand.execute(); // Aire acondicionado se ha apagado.
setTemperatureAcCommand.execute(); // Aire acondicionado se ha ajustado a 25 grados.

/**
 * Beneficios del patrón Command:
 * - Desacopla el emisor y el receptor de la solicitud
 * - Permite implementar operaciones deshacer/rehacer
 * - Facilita la composición de comandos complejos
 */
