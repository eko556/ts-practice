import { resolveObjectURL } from "buffer";

{
  function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }

  console.log(repeat("TEST", 13));
  console.log(repeat<number>(13, 13));
}

{
  //関数の名前を書かないとき
  const repeat = function <T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };
}

{
  //アロー関数のとき
  const repeat = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };
}

{
  //メソッド記法
  const utils = {
    repeat<T>(element: T, length: number): T[] {
      const result: T[] =[];
      for (let i = 0; i < length; i++) {
        result.push(element);
      }
      return result;
    }
  }
}

{
  const pair = <Left, Right>(left: Left, right:Right): [Left , Right] => [left , right];
  const p = pair<string, number>("uhyo", 26);
  console.log(p);
}

{
  //extendsを使用することで、repeatの引数をstring型のname属性を持つオブジェクトにする
  const repeat = <T extends {name: string;}>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++){
      result.push(element);
    }
    return result;
  }

  type HasNameAndAge = {
    name: string,
    age: number,
  }
  console.log(repeat<HasNameAndAge>({
    name:"uhyo",
    age: 26,
  }, 14));
}