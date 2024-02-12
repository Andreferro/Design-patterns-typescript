// Structural pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

class Player {
  name?: string;
  age?: number;

  setName(n: string) {
    this.name = n;
  }

  setAge(a: number) {
    this.age = a;
  }
}

class Weapon {
  type?: string;

  setType(t: string) {
    this.type = t;
  }
}

class Vehicle {
  model?: string;
  topSpeed?: number;

  setModel(m: string) {
    this.model = m;
  }

  setTopSpeed(t: number) {
    this.topSpeed = t;
  }
}

export default class Game {
  character?: Player;
  weapon?: Weapon;
  vehicle?: Vehicle;

  constructor() {
    this.character = new Player();
    this.weapon = new Weapon();
    this.vehicle = new Vehicle();
  }
}
