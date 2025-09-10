
// const greeting = "Hello",
//   target = "world !",
//   text = greeting + target;

// console.log(text);


// const width1 = 5;
// const width2 = 8;
// const height: number = 3;
// const area = (width1 + width2) * height / 2;
// console.log(area);

// const bignum: bigint = (123n + 456n) * 2n;
// console.log(bignum);

// const str1 = "Hello,";
// const str2 = "world!";
// const str3 = `${str1} ${str2}`;
// console.log(str3);

// console.log("Hello, \\World!/");

// console.log("Hello, \u{796d} World!");

// const no: boolean = false;
// const yes: boolean = true;
// console.log(yes, no);

// const string1 = String(1234.5);
// console.log(string1);
// const string2 = String(true);
// console.log(string2);
// const string3 = String(null);
// console.log(string3);
// const string4 = String(undefined);
// console.log(string4);

// const left1 = -5, right1 = 0;
// console.log(left1 <right1 ); //true

// const left2 = 100n, right2 = 50n;
// console.log(left2 >= right2); //true

// const left3 = -10, right3 = 0;
// console.log(left3 > right3); //false

// const left4 = 12n , right4 = 8n;
// console.log(left4 <= right4); //false

// const t = true;
// const f = false;

// console.log(t && t);
// console.log(t && f);
// console.log(f && f);
// console.log(t || t);
// console.log(t || f);
// console.log(f || f);

// const num = 1234;

// if(!Number.isNaN(num)){
//   console.log(num, "はNaNではありません。");
// }

// const input1 = "123", input2 = "";
// const input1isNotEmpty  = !!input1;
// const input2isNotEmpty = !!input2;
// console.log(input1isNotEmpty, input2isNotEmpty);

// const secret = process.env.SECRET ?? "default";
// console.log(`secretは ${secret}です。`);
// let name1: string;
// console.log(name1 = "名無し")

let sum = 0;
let i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

sum = 0;
for (let i: number = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// while (true) {
//   if(i > 100) {
//     break;
//   }
//   sum += i;
//   i++;
// }