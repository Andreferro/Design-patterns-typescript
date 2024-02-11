// Behavorial pattern that lets you pass requests along a chain of handlers.
// Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

type AuthType = {
  email: string,
  password?: string,
}

type User = Omit<AuthType, 'password'> & {
  name: string,
  age: number,
}

export class AuthChain<T> {
  protected next: AuthChain<T> | null = null;

  setNext(n: AuthChain<T>): AuthChain<T> {
    this.next = n;
    return n;
  }

  run(email: string, password?: string): AuthType {
    if (this.next) return this.next.run(email, password);
    return { email, password };
  }
}

export class Validate extends AuthChain<AuthType> {
  run(email: string, password: string): { email: string, password?: string } {
    if(!email || !password) throw new Error('Invalid credentials');
    return super.run(email, password);
  }
}

export class CreateSesion extends AuthChain<AuthType> {
  run(email: string, password: string): { email: string, password?: string } {
    // Create backend session
    // ......................
    return super.run(email, password);
  }
}

export class GetData extends AuthChain<User> {
  run(email: string): User {
    return { email, name: 'Test', age: 20 };
  }
}
