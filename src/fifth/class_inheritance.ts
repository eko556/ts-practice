{
  class User {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    public isAdult(): boolean {
      return this.age >= 20;
    }
  }
  class PremiumUser extends User {
    rank: number;

    //constructorのオーバーライドには既存のプロパティをsuper()で持って来る必要がある
    constructor(name: string, age: number, rank: number){
      super(name, age);
      this.rank = rank;
    }
    //メソッドのオーバーライド(オーバーライド修飾子は必須ではなく、明示するためだけのもの)
    //tsconfig.json内での、「noImplicitOverride」コンパイラオプションがtrueだとオーバーライドの際に必ずoverride修飾子をつける必要がある。
    public override isAdult(): boolean {
      return this.age >= 10;
    }
  }
  const uhyo = new PremiumUser("uhyo", 26, 2);
  console.log(uhyo.rank);
  console.log(uhyo.name);
  console.log(uhyo.isAdult());

  function getMessage(u: User) {
    return `こんにちは、${u.name}さん`;
  }
  console.log(getMessage(uhyo));

  const taro: User = new User("taro", 15);
  const jiro: PremiumUser = new PremiumUser("jiro", 15, 2);
  console.log(taro.isAdult());
  console.log(jiro.isAdult());

  const miniUhyo = new PremiumUser("uhyo", 15, 1);
  console.log(miniUhyo.isAdult());
  console.log(taro.isAdult());
}

{
  class User {
    name: string;
    protected age: number;
    private _isAdult: boolean;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this._isAdult = age >= 20;
    }
    public isAdult(): boolean {
      return this._isAdult;
    }
  }
  class PremiumUser extends User {
    public setAge(newAge: number){
      this.age = newAge;
    }
  }

  const uhyo = new PremiumUser("uhyo", 26);
  console.log(uhyo.isAdult());
  uhyo.setAge(15);
  console.log(uhyo.isAdult());
}

{
  // implementsによってクラスのインスタンスが部分型であることを明示する
  type HasName = {
    name: string;
  }

  class User implements HasName {
    name: string;
    #age: number;

    constructor(name: string, age: number){
      this.name =  name;
      this.#age = age;
    }
    public isAdult() {
      return this.#age >= 20;
    }
  }
}