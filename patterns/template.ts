// Behavorial pattern that creates an interface that is used as a skeleton for an algorithm.
// Its subclasses can implement their methods in different ways according to their needs without changing the main structure.

type CharacterType = 'player' | 'enemy' | undefined;

abstract class Person {
  public name?: string;
  public health: number = 100;
  public level: number = 1;
  public type: CharacterType;
  public moveSet?: string[];

  public templateMethod(name?: string): void {
    this.setName(name);
    this.setType();
    this.levelUp();

    console.log('Character created:');
    console.log(`Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`Level: ${this.level}`);
    console.log(`Move Set: ${this.moveSet || 'none'}`);
  }

  protected abstract setName(name?: string): void;

  protected abstract setType(): void;

  protected levelUp(): void { };
  protected aiMoveSet(): void { };
}

export class MainCharacter extends Person {
  protected setName(name: string): void {
    this.name = name;
  }

  protected setType(): void {
    this.type = 'player';
  }

  protected levelUp(): void {
    this.level++;
  }
}

const ENEMY_NAMES = ['Nito', 'Ornstein', 'Smough', 'Seath', 'Gwyn'];

export class EnemyCharacter extends Person {
  constructor() {
    super();
    this.aiMoveSet();
  }

  protected setName(): void {
    const randomIndex = Math.floor(Math.random() * 5);
    this.name = ENEMY_NAMES[randomIndex];
  }

  protected setType(): void {
    this.type = 'enemy';
  }

  protected aiMoveSet(): void {
    this.moveSet = ['frontAttack', 'jumpAttack', 'charge'];
  }
}

export function createCharacter(abstractClass: Person, name?: string) {
  abstractClass.templateMethod(name);
};
