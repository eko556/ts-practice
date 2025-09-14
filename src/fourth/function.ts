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
    for (let i = 0; i < n; i++){
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
  const calcBMI = function({height, weight}: Human){
    return weight / height ** 2;
  };
  const uhyo: Human = {height: 1.84, weight: 72};
  console.log(calcBMI(uhyo));
}
