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
      //thisの型を記述する特殊な書き方(非推奨)
      // return users.filter(function (this: User, u) {
      //   return u.#age > this.#age;
      // });
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
  // apply(obj, args)は、関数の中のthisをobjにして呼び出す。argsは引数を配列に入れたもの
  // call(obj, args...)はapplyの引数を配列にまとめずに渡すのみの違い
  console.log(uhyo.isAdult.apply(john, []));
  console.log(uhyo.isAdult.call(john));

  const boundIsAdult = uhyo.isAdult.bind(uhyo);
  console.log(Reflect.apply(boundIsAdult, uhyo, []));
}

{
  class A {
    foo = 123;
    bar = this.foo + 100;
  }
  const obj = new A();
  console.log(obj.bar);
}

{
  //組み込みオブジェクトは実質クラスみたいなもの。継承にも使用できる
  class RepeatArray<T> extends Array<T> {
    repeat(times: number): RepeatArray<T> {
      const result = new RepeatArray<T>();
      for (let i = 0; i < times; i++) {
        result.push(...this);
      }
      return result;
    }
  }
  const arr = new RepeatArray(1, 2);
  arr.push(3);
  const repeated = arr.repeat(3);
  console.log(repeated);
}
