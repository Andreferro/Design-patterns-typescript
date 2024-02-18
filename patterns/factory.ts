// Creational pattern that creates an interface that is used to make objects from a subclass, allowing it to alter the type of the object created.
// It differs from "template" by focusing on the object creation instead of the structure.

type CharacterType = 'player' | 'enemy' | 'npc' | undefined;
type CharacterClass = 'warrior' | 'wizard' | 'archer' | undefined;
type EnemyCharacterClass = 'orc' | 'dragon' | undefined;
type WeaponType = 'axe' | 'sword' | 'hammer' | 'staff' | 'bow' | undefined;

type Character = {
  name: string,
  type: CharacterType,
  characterClass: CharacterClass | EnemyCharacterClass,
  weapon?: WeaponType,
}

class SimpleCharacter implements Character {
  name: string = '';
  type: CharacterType;
  characterClass: CharacterClass | EnemyCharacterClass;
  weapon?: WeaponType;

  constructor(name: string, characterClass: CharacterClass | EnemyCharacterClass, weapon?: WeaponType) {
    this.name = name;
    this.characterClass = characterClass;
    this.weapon = weapon;
  }

  public getCharacter() {
    console.log(`-----------------------`);
    console.log(`Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`Class: ${this.characterClass}`);
    console.log(`Weapon: ${this.weapon}`);
  }
}

class MainCharacter extends SimpleCharacter {
  constructor(name: string, characterClass: CharacterClass, weapon: WeaponType) {
    super(name, characterClass, weapon);
    this.type = 'player';
  }
}

class EnemyCharacter extends SimpleCharacter {
  constructor(name: string, characterClass: EnemyCharacterClass) {
    super(name, characterClass);
    this.type = 'enemy';
  }
}

class NpcCharacter extends SimpleCharacter {
  constructor(name: string, characterClass: CharacterClass, weapon: WeaponType) {
    super(name, characterClass, weapon);
    this.type = 'npc';
  }
}

type CharacterClassType = {
  player: MainCharacter,
  enemy: EnemyCharacter,
  npc: NpcCharacter,
};

export class CharacterCreator {
  static create<K extends keyof CharacterClassType>(characterType: K, options: Omit<Character, 'type'>): CharacterClassType[K]{
    if (characterType === 'player') {
      return new MainCharacter(options.name, (options.characterClass as CharacterClass), options.weapon);
    } else if (characterType === 'enemy') {
      return new EnemyCharacter(options.name, (options.characterClass as EnemyCharacterClass));
    } else {
      return new NpcCharacter(options.name, (options.characterClass as CharacterClass), options.weapon);
    }
  }
}
