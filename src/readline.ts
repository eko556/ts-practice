import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question('名前を入力してください：', (name) => {
//   const displayName = name || "名無し";
//   console.log(`こんにちは、${displayName}さん`);
//   rl.close();
// })
// rl.question('名前を入力してください：', (name) => {
//   let displayName: string = "";
//   if (name !== ""){
//     console.log("ちゃんと名前があって偉い！");
//     displayName = name;
//   } else {
//     console.log("名前を入力してください！");
//     displayName = "名無し";
//   }
//   console.log(`こんにちは、${displayName}さん`);
//   rl.close();
// })

// rl.question("パスワードを入力してください：", (password) => {
//   if (password === "hogehoge") {
//     console.log("ようこそ！");
//   } else {
//     console.log("誰？");
//   }
//   rl.close();
// // });

// rl.question("数字を入力してください：", (num) => {
//   const n = Number(num);
//   const message =
//     0 <= n && n < 100
//       ? `${num}は0以上100未満の数字です。`
//       : `${num}は0以上100未満の数字ではありません。`;
//   console.log(message);
//   rl.close();
// });

// rl.question("数字を入力してください：", (num) => {
//   const n = Number(num);
//   if (n < 0) {
//     console.log("numは負の数です。");
//   } else if (n === 0) {
//     console.log("numは0です。");
//   } else {
//     console.log("numは正の数です。");
//   }
//   rl.close();
// });

rl.question("コマンドを入力してください：", (command) => {
  switch (command) {
    case "greet":
      console.log("こんにちは");
      break;
    case "cat":
      console.log("あなたは猫はですか？");
      console.log("私は犬派です。");
      break;
    default:
      console.log(`コマンド「${command}」を認識できませんでした。`);
  }

  rl.close();
});


