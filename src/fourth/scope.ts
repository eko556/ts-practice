// 同じrepeatLengthを宣言しても、どのスコープで呼び出されたかによって値が変わる
const repeatLength = 5;
{
  const repeat = function <T>(element: T): T[] {
    const repeatLength = 3;
    const result: T[] = [];
    for (let i = 0; i < repeatLength; i++) {
      result.push(element);
    }
    return result;
  };
  console.log(repeat("a"));
  console.log(repeatLength);
}

function sabayomi(age: number) {
  if (age >= 30) {
    const lie = age -10;
    return lie;
  }
  if (age >= 20) {
    const lie = age - 5;
    return lie;
  }
  return age;
}

console.log(sabayomi(43));