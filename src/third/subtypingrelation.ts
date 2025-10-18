import { LargeNumberLike } from "crypto";

{
type FooBar = {
  foo: string;
  bar: number;
}
type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
}
const obj: FooBarBaz = {
  foo: "hi",
  bar: 1,
  baz: false,
}
const obj2: FooBar = obj;

type Animal = {
  age: number;
}
type Human = {
  age: number;
  name: string;
}
type AnimalFamily = {
  familyName : string;
  mother: Animal,
  father: Animal,
  child: Animal,
}

type HumanFamily = {
  familyName: string,
  mother: Human,
  father: Human,
  child: Human,
}
type optionalTest = {
  readonly foo: boolean;
  bar: boolean;
  baz?: number;
}
const optionalObj: optionalTest = {foo: false, bar: true};
const optionalObj2: optionalTest = {foo: false, bar: true, baz: 123};

if (optionalObj2.baz !== undefined)console.log(optionalObj2.baz * 1000);

}