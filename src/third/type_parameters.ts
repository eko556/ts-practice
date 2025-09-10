{
type User<T> = {
  name: string;
  child: T;
};
const user1 :User<string> = {
  name: "TEST",
  child: "ななｎ"
};
type HasName = {
  name: string;
};

type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
const obj : Family<{name: string, age: number}, HasName> = {
  mother: {name: "mama", age: 12},
  father: {name: "papa", age: 23},
  child: {name: "boy"},
}
}