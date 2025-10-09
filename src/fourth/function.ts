{
  function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }

  console.log(range(5, 10));

  function helloWorldTimes(n: number): void {
    for (let i = 0; i < n; i++) {
      console.log("Hello, World");
    }
  }

  function helloWordlTimes2(n: number): void {
    if (n >= 100) {
      console.log(`${n}回なんて無理です!`);
      return;
    }
    for (let i = 0; i < n; i++) {
      console.log("Hello, World");
    }
  }
  // helloWorldTimes(5);
  // helloWordlTimes2(5);
  // helloWordlTimes2(101);
}

{
  type Human = {
    height: number;
    weight: number;
  };
  // const calcBMI = function(human: Human): number {
  //分割代入を使った例
  const calcBMI = function ({ height, weight }: Human) {
    return weight / height ** 2;
  };
  const uhyo: Human = { height: 1.84, weight: 72 };
  console.log(calcBMI(uhyo));
}

//力試し
{
  function getFizzBuzzString(count: number) {
    if (count % 3 === 0 && count % 5 === 0) {
      return "FizzBuzz";
    } else if (count % 3 === 0) {
      return "Fizz";
    } else if (count % 5 === 0) {
      return "Buzz";
    } else {
      return String(count);
    }
  }
  function sequence(from: number, to: number): number[] {
    const arr: number[] = [];
    for (let i = from; to - i >= 0; i++) {
      arr.push(i);
    }
    return arr;
  }
  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
}

{
  function map<T, S>(array: T[], callback: (param: T) => S): S[] {
    const result = [];
    for (const v of array) {
      result.push(callback(v));
    }
    return result;
  }
  const data = [1, 1, 2, 3, 5, 8, 13];
  const data2 = [1, -3, -2, 8, 0, -1];
  const result = map(data, (x) => x * 10);
  const result2: boolean[] = map(data2, (x) => x >= 0);
  console.log(result2);
  console.log(result);
}
