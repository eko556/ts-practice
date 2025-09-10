interface FooBarObj {
  foo: number;
  bar: string;
}
{
  const obj: FooBarObj = {
    foo: 0,
    bar: "string",
  };

type PriceData = {
  [key: string]: number;
}

const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500,
}

data.chicken = 350;

console.log(data);

type MyObj = {
  readonly foo: boolean;
  bar: boolean;
  baz?: number;
}

const obj1: MyObj = {
  foo: false, bar: true,
}

const obj2 : MyObj = {
  foo: false, bar: true, baz: 222,
}

const num: number = 0;
type T = typeof num;
const foo: T = 123;
console.log(typeof num);
}