{
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }
    public isAdult() {
      return this.#age >= 20;
    }
    public filterOlder(users: readonly User[]): User[] {
      return users.filter((u) => u.#age > this.#age);
    }
  }
  const uhyo = new User("uhyo", 26);
  // const isAdult = uhyo.isAdult;
  // console.log(isAdult());

  const john = new User("John Smith", 15);
  const bob = new User("Bob", 40);

  const older = uhyo.filterOlder([john, bob]);
  console.log(older);
}

{
  class User {
    name: string;
    #age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }
    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  const uhyo = new User("uhyo", 25);
  const john = new User("John Smith", 15);

  console.log(uhyo.isAdult());

  console.log(uhyo.isAdult.apply(john, []));
  console.log(uhyo.isAdult.call(john));

  const boundIsAdult = uhyo.isAdult.bind(uhyo);
  console.log(Reflect.apply(boundIsAdult, uhyo, []));
}
