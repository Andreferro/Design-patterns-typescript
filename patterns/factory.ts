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

  abstract factoryMethod(name: string, characterClass: EnemyCharacterClass): void;
}

abstract class MainCharacter implements Character {
  public name?: string;
  public class: CharacterClass;
  public weapon: WeaponType;
  public readonly type: CharacterType = 'player';

  abstract factoryMethod(name: string, characterClass: CharacterClass, weapon: WeaponType): void;
}

export class CreateCharacter extends MainCharacter {
  public factoryMethod(name: string, characterClass: CharacterClass, weapon: WeaponType): void {
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

export class CreateEnemy extends EnemyCharacter {
  public factoryMethod(name: string, characterClass: EnemyCharacterClass): void {
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
