{
  type HasName = {
    name: string;
  }
  type HasNameAndAge = {
    name: string;
    age: number;
  }

  const fromAge = (age: number): HasNameAndAge => ({
    name: "John Smith",
    age,
  })
  const f: (age: number) => HasName = fromAge;
  const obj: HasName = f(100);
  console.log(obj);
}
// 引数の型による部分型関係
{
  type HasName = {
    name: string;
  }
  type HasNameAndAge = {
    name: string;
    age: number;
  }
  const showName = (obj: HasName) => {
    console.log(obj.name);
  };
  const g: (obj: HasNameAndAge) => void = showName;

  g({
    name: "uhyo",
    age: 26,
  });
}

{
  type UnaryFunc = (arg: number) => number;
  type BinaryFunc = (left: number, right: number) => number;

  const double: UnaryFunc = arg => arg *2;
  const add: BinaryFunc = (left, right) => left + right;

  const bin: BinaryFunc = double;
  console.log(bin(10,100));
}

{
  type HasName = {name: string};
  type HasNameAndAge = {name: string; age: number};
  type Obj = {
    func: (arg: HasName) => string;
    method(arg: HasName): string;
  }
  const something: Obj = {
    func: user => user.name,
    method: user => user.name,
  }

  const getAge = (user: HasNameAndAge) => String(user.age);
  // something.func = getAge;
  something.method = getAge;
}

