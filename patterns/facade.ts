// Structural pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

class Player {
  name: string | undefined;
  age: number | undefined;

  setName(n: string) {
    this.name = n;
  }

  setAge(a: number) {
    this.age = a;
  }
}

class Weapon {
  type: string | undefined;

  setType(t: string) {
    this.type = t;
  }
}

class Vehicle {
  model: string | undefined;
  topSpeed: number | undefined;

  setModel(m: string) {
    this.model = m;
  }

  setTopSpeed(t: number) {
    this.topSpeed = t;
  }
}

export default class Game {
  character: Player | undefined;
  weapon: Weapon | undefined;
  vehicle: Vehicle | undefined;

  constructor() {
    this.character = new Player();
    this.weapon = new Weapon();
    this.vehicle = new Vehicle();
  }
}
