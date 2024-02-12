// Singleton example
import { PeopleSingleton, PeopleType, person } from './patterns/singleton';

let newPerson: PeopleType | undefined;

console.log(`${person?.name} - ${person?.age}`);
// 'person' already exists, so it breaks when trying to create another instance
try {
  newPerson = new PeopleSingleton("John", 20);
} catch (error) {
  console.log((error as Error).message);
}

// Chain of responsibility
import { Validate, GetData, CreateSesion } from './patterns/chainOfResponsibility';

const auth = new Validate();
auth.setNext(new CreateSesion()).setNext(new GetData());
console.log(auth.run('test@test.com', '123'));

// Facade
import Game from './patterns/facade';
const GameObject = new Game();
GameObject.character!.setName('Player 1');
GameObject.character!.setAge(20);
GameObject.vehicle!.setModel('Nissan GTR');
GameObject.vehicle!.setTopSpeed(315);
GameObject.weapon!.setType('sword');

console.log(`${GameObject.character!.name} -- ${GameObject.character!.age} -- ${GameObject.weapon!.type}`);
console.log(`${GameObject.vehicle!.model} -- ${GameObject.vehicle!.topSpeed}`);

// Strategy
import { Context, RegularUser, AdminUser } from './patterns/strategy';
const context = new Context(new RegularUser());
context.getData(1);
context.setStrategy(new AdminUser());
context.getData(1);

// Observer
import { ConcreteSubject, StartingSystem, ShuttingDown } from './patterns/observer';
const subject = new ConcreteSubject();

const observer1 = new StartingSystem();
subject.attach(observer1);

const observer2 = new ShuttingDown();
subject.attach(observer2);

subject.changeSystemState();
subject.changeSystemState();

subject.detach(observer2);

subject.changeSystemState();
subject.changeSystemState();

// Template
import { createCharacter, EnemyCharacter, MainCharacter } from './patterns/template';
createCharacter(new MainCharacter(), 'John');
createCharacter(new EnemyCharacter());
