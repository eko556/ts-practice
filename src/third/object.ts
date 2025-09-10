

const input = "";

const foo = 123;
const bar = "Hello, World!";
const nam = input ? input : "名無し";
const propName = "foo";
const obj = {
  [propName]: 123,
  bar,
  nam,
  1: "one",
  2.05: "two point o five",
};


console.log(obj.foo);
console.log(obj.bar);
console.log(obj.nam);
console.log(obj["1"]);
console.log(obj["2.05"]);

const user = {
  name : "myName",
  age : 25,
}
user.age = 26;
console.log(user.age);

const obj1 = {
  bar: 456,
  baz: 789,
}
const obj2 = {
  foo: 123,
  ...obj1,
}
console.log(obj2);

const objobj: {foo: number; bar: string; "foo bar": number;} = {
  foo: 123,
  bar: "Hello, World!",
  "foo bar": 12345,
}


const ob: FooBarObj = {
  foo: 123,
  bar: "testtest",
};
type UserId = string;
const id: UserId = "uhyo";