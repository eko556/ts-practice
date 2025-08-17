// 3の倍数ではなく、5の倍数でもないときは整数をそのまま出力する
// 3の倍数であり、5の倍数でないときは整数の代わりにFizzを出力する
// 3の倍数でなく、5の倍数であるときは整数の代わりにBuzzを出力する
// 3の倍数であり、5の倍数でもあるときは整数の変わりにFizzBuzzを出力する
  let output = "";
for (let i = 1; i <= 100; i++) {

  if (i % 15 === 0){
    output += "FizzBuzz ";
    // console.log("FizzBuzz");
  } else if (i % 5 === 0){
        output += "Buzz ";
    // console.log("Buzz");
  } else if (i % 3 === 0){
            output += "Fizz ";
    // console.log ("Fizz");
  } else {
        output += `${i} `;
    // console.log(i);
  }
}
console.log(output);