// Behavorial pattern that creates an interface to operate multiple classes and objects that are interchangeable.
// Used when you need to a code with different versions and change it in runtime.
// It is also known as Policy.

type Data = {
  id: number,
  name: string,
  email: string,
};

type AdminData = Data & {
  isAdmin: true,
  resources: ['adminPanel', 'profile', 'dashboard'],
}

type UserData = Data & {
  isAdmin: false,
  resources: ['profile', 'dashboard'],
}

type Strategy = {
  getData(id: number): AdminData | UserData;
}

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public getData(id: number): void {
    console.log(this.strategy.getData(id));
  }
}

export class RegularUser implements Strategy {
  public getData(id: number): UserData {
    return {
      id,
      name: 'John',
      email: 'john@example.com',
      isAdmin: false,
      resources: ['profile', 'dashboard'],
    };
  }
}

export class AdminUser implements Strategy {
  public getData(id: number): AdminData {
    return {
      id,
      name: 'John',
      email: 'john@example.com',
      isAdmin: true,
      resources: ['adminPanel', 'profile', 'dashboard'],
    };
  }
}
