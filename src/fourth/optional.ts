{
  const toLowerOrUpper = (str: string, upper?: boolean): string => {
    if (upper) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }
  console.log(toLowerOrUpper("Hello"));
  console.log(toLowerOrUpper("Hello", false));
  console.log(toLowerOrUpper("Hello", true));
}

{
  const toLowerOrUpper = (str: string, upper: boolean = false): string => {
    if (upper) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }
  console.log(toLowerOrUpper("Hello"));
  console.log(toLowerOrUpper("Hello", false));
  console.log(toLowerOrUpper("Hello", true));
}

{
  function foo(): void {}
  const bar = (): void => {};
  console.log(foo.name);
  console.log(bar.name);

  type HasName = {name : string };
  const obj: HasName = foo;
}
