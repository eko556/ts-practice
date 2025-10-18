{
  class User {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }
  }

  const uhyo = new User();
  // new Userで宣言されていなくても、クラス宣言と同様のプロパティを持っていればその型として扱うことができる
  const john: User = {
    name: "John Smith",
    age: 15,
    isAdult: () => true,
  };

  type MyUserConstructor = new () => User;
  const MyUser: MyUserConstructor = User;
  const u = new MyUser();
  console.log(u.name, u.age);

  // instanceof 演算子はnew()で作成された変数のみtrueを返すもの
  console.log(uhyo instanceof User);
  console.log({} instanceof User);
  console.log(john instanceof User);
}
// instanceof 演算子の使い方
{
  type HasAge = {
    age: number;
  };
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  function getPrice(customer: HasAge) {
    if (customer instanceof User) {
      if (customer.name === "uhyo") {
        return 0;
      }
    }
    return customer.age < 18 ? 1000 : 1800;
  }

  const customer1: HasAge = { age: 15 };
  const customer2: HasAge = { age: 40 };
  const uhyo = new User("uhyo", 26);
  console.log(getPrice(customer1));
  console.log(getPrice(customer2));
  console.log(getPrice(uhyo));
}
