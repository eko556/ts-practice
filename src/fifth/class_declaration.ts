// class User {
//   name: string = "";
//   age: number = 0;
{
  class User {
    name: string;
    age: number;
    // コンストラクタでプロパティに代入した場合は、初期化する際の初期値は必要ない
    // コンストラクタ内では、読み取り専用プロパティでも代入することができる
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    isAdult(): boolean {
      return this.age >= 20;
    }
    setAge(newAge: number) {
      this.age = newAge;
    }
  }

  const uhyo = new User("uhyo", 26);
  console.log(uhyo.name);
  console.log(uhyo.isAdult());
  uhyo.setAge(26);
  console.log(uhyo.age);
  console.log(uhyo.isAdult());
}

{
  class User {
    static adminName: string = "uhyo";
    static getAdminUser() {
      return new User(User.adminName, 26);
    }
    // プロパティの宣言とコンストラクタ宣言は44行目のように省略して記述することができる
    // name: string;
    // age: number;
    // constructor(name: string, age: number) {
    //   this.name = name;
    //   this.age = age;
    // }
    // コンストラクタの引数であると同時にプロパティ宣言である
    constructor(public name: string, public age: number) {}
    public isAdult(): boolean {
      return this.age >= 20;
    }
  }
  console.log(User.adminName);
  const admin = User.getAdminUser();
  console.log(admin.age);
  console.log(admin.isAdult());

  const uhyo = new User("uhyo", 26);
  console.log(uhyo.name);
}

{
  // クラス式の中でもクラスは宣言できるが、privateやprotectedのプロパティが使用不可能である。
  // 基本的にはあまり使われない
  // プロパティの前に#をつけることでプライベート修飾子と同じ効果をもたせることは可能
  const User = class {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }
    public isAdult(): boolean {
      return this.#age >= 20;
    }
  };
  const uhyo = new User("uhyo", 26);
  console.log(uhyo.name);
  console.log(uhyo.isAdult());
}

{
  class User {
    static adminUser: User;
    static {
      this.adminUser = new User();
      this.adminUser.#age = 9999;
    }
    #age: number = 0;
    getAge() {
      return this.#age;
    }
    setAge(age: number) {
      if (age < 0 || age > 150) {
        return;
      }
      this.#age = age;
    }
  }
  console.log(User.adminUser.getAge());
}
{
  class User<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
      this.name = name;
      this.#age = age;
      this.data = data;
    }
    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  const uhyo = new User<string>("uhyo", 26, "追加データ");
  const data = uhyo.data;
  console.log(typeof data);
  const john = new User("John Smith", 15, { num: 123 });
  const data2 = john.data;
  console.log(typeof data2);
}
