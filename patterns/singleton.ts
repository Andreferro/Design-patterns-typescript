// Creational pattern that restricts identation of a class to a single element.
// Characteristics:
// - Ensure they only have one instance
// - Provide easy access to that instance
// - Control their instantiation (for example, hiding the constructors of a class)

export type PeopleType = {
  name: string;
  age: number;
}

let person: PeopleType | undefined;

export class PeopleSingleton implements PeopleType {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    if (person) throw Error("Instance already created");

    this.name = n;
    this.age = a;
  }

  getPerson() {
    console.log(this.name, this.age);
  }
}

person = new PeopleSingleton("John", 20);

export { person };