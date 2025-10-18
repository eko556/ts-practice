// destructuring assignment 分割代入
{
  // const obj = {
  //   foo: 123,
  //   bar: "TEST"
  // }
  // const { foo, bar } = obj;

  // const {
  //   foo: fooFoo,
  //   bar: barVar
  // } = obj;

  // console.log(foo);
  // console.log(bar);
  // console.log(fooFoo);
  // console.log(barVar);
  const nested = {
    num: 123,
    obj: {
      foo: "hello",
      bar: "world",
    },
  };
  const {
    num,
    obj: { foo },
  } = nested;
  console.log(num);
  console.log(foo);

  const arr = [1, 2, 4, 8, 16, 32];
  const [first, second, third] = arr;
  console.log(first);
  console.log(second);
  console.log(third);

  const tuple: [string, number] = ["uhyo", 26];
  const [myName, age] = tuple;
  console.log(myName);
  console.log(age);
}

{
  type Obj = { foo?: number };
  const obj1: Obj = {};
  const obj2: Obj = { foo: 234 };
  const obj = {
    foo: 123,
    bar: 1234,
    baz: "TETS",

  }

  const { foo = 500 } = obj1;
  const { foo: bar = 500 } = obj2;
  console.log(foo);
  console.log(bar);
  const {foo: fooo , ...restObj} = obj;
  console.log(restObj);
}
