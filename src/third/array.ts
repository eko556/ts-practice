{
  const arr: readonly number[] = [0, 123, -456 * 1000];
  console.log(arr);
  const arr1 = [4, 5, 6];
  const arr2 = [1, 2, 3, ...arr1];
  console.log(arr2);

  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr);
  arr1.push(444);
  arr1.unshift(111222);
  console.log(arr1);
  console.log(arr1.includes(1));
  console.log(arr1.includes(4));
  console.log(arr1.indexOf(444));
  console.log(arr1.indexOf(111222));
  const arr3 = arr1.slice(2, 4);

  const arr4 = arr1.concat(arr3);
  console.log(arr3);

  for (const num of arr2) {
    console.log(num);
  }
}

const arr1: boolean[] = [false, true];
const arr2: Array<{ name: string }> = [
  { name: "山田さん" },
  { name: "田中さん" },
  { name: "鈴木さん" },
];
