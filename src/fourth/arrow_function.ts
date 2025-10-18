type Human = {
  height: number;
  weight: number;
};
const calcBMI = ({ height, weight }: Human): number => {
  return weight / height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72 };
console.log(calcBMI);

{
  // アロー関数の省略形
  const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;
}
{
const obj = {
  double(num: number): number {
    return num * 2;
  },
  double2: (num: number): number => num * 2
};
console.log(obj.double(100));
console.log(obj.double2(-50));
}
