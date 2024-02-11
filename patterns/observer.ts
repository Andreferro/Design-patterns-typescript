type Subject = {
  attach: (observer: Observer) => void,
  detach: (observer: Observer) => void,
  notify: () => void,
}

type Observer = {
  update: (subject: Subject) => void,
}

export class ConcreteSubject implements Subject {
  public systemStarted: boolean = false;
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    const exists: boolean = this.observers.includes(observer);
    if (exists) return;
    this.observers.push(observer);
  };

  detach(observer: Observer): void {
    const index: number = this.observers.indexOf(observer);
    if (index === -1) return;
    this.observers.splice(index, 1);
  };

  notify() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update(this);
    }
  };

  public changeSystemState(): void {
    this.systemStarted = !this.systemStarted;
    console.log('System state changed to: ' + this.systemStarted);
    this.notify();
  }
}

export class StartingSystem implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.systemStarted) {
      console.log('System is online.');
    }
  }
}

export class ShuttingDown implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && !subject.systemStarted) {
      console.log('System is offline.');
    }
  }
}
