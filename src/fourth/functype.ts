{
  const xRepeat: F = (num: number): string => "x".repeat(num);
  type F = (repeatNum: number) => string;
  type F2 = (arg: string, arg2: string) => boolean;
  const fun: F2 = (str1: string, str2: string ): boolean => str1 === str2;
}

{
  // 返り値の型は省略可能
  const xRepeat = (num: number) => "x".repeat(num);
  // (num: number) => void
  const g = (num: number) => {
    for (let i = 0; i < num; i++){
      console.log("Hello, World!");
    }
  }
}

{
  // 返り値の型注釈を書いておくと、returnを書き忘れた際などにコンパイルエラーを発生させてくれる
  function range(min: number, max: number): number[]{
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;

  }
  const arr = range(5, 10);
  for (const value of arr) console.log(value);
}