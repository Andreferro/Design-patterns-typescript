// 

type CharacterType = 'player' | 'enemy' | undefined;
type CharacterClass = 'warrior' | 'wizard' | 'archer' | undefined;
type EnemyCharacterClass = 'orc' | 'dragon' | undefined;
type WeaponType = 'axe' | 'sword' | 'hammer' | 'staff' | 'bow' | undefined;

type Character = {
  name?: string,
  type: CharacterType,
  class: CharacterClass | EnemyCharacterClass,
  weapon: WeaponType,
}

abstract class EnemyCharacter implements Omit<Character, 'weapon'> {
  public name?: string;
  public class: EnemyCharacterClass;
  public readonly type: CharacterType = 'enemy';
}

abstract class MainCharacter implements Character {
  public name?: string;
  public class: CharacterClass;
  public weapon: WeaponType;
  public readonly type: CharacterType = 'player';
}

class CreateCharacter extends MainCharacter {
  constructor(name: string, characterClass: CharacterClass, weapon: WeaponType) {
    super();
    this.name = name;
    this.class = characterClass;
    this.weapon = weapon;
  }

  public getCharacter() {
    console.log(`Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`Class: ${this.class}`);
    console.log(`Weapon: ${this.weapon}`);
    console.log(`-----------------------`);
  }
}

class CreateEnemy extends EnemyCharacter {
  constructor(name: string, characterClass: EnemyCharacterClass) {
    super();
    this.name = name;
    this.class = characterClass;
  }

  public getCharacter() {
    console.log(`Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`Class: ${this.class}`);
    console.log(`-----------------------`);
  }
}

export class CharacterFactory {
  public create(type: CharacterType, name: string, characterClass: CharacterClass | EnemyCharacterClass, weapon?: WeaponType) {
    if (type === 'player') {
      return new CreateCharacter(name, characterClass as CharacterClass, weapon);
    }
    else {
      return new CreateEnemy(name, characterClass as EnemyCharacterClass);
    }
  }
}
