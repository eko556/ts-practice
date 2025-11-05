// {
//   console.log("エラーを発生させます");
//   throwError();
//   console.log("エラーが発生しました！");

//   function throwError() {
//     const error = new Error("エラーが発生しました！");
//     throw error;
//   }
// }

// {
//   function getAverage(nums: number[]) {
//     if (nums.length === 0) {
//       throw Error("配列が空です");
//     }
//     return sum(nums) / nums.length;
//   }
//   function sum(nums: number[]) {
//     let result: number = 0;
//     for (let i = 0; i < nums.length; i++) {
//       result += nums[i];
//     }
//     return result;
//   }
//   console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// }

// {
//   try {
//     console.log("エラーを発生させます");
//     throwError();
//     console.log("エラーを発生させました");
//   } catch (err) {
//     console.log("エラーをキャッチしました。");
//     console.log(err);
//   }
//   console.log("終わり");
// }

// {
//   try {
//     console.log("tryブロック1");
//     throwError();
//     console.log("tryブロック2");
//   } catch (err) {
//     console.log("catchブロック");
//   } finally {
//     console.log("finallyブロック");
//   }
// }

// function throwError() {
//   const error = new Error("エラーが発生しました！");
//   throw error;
// }

// {
//   try {
//     console.log("エラーを発生させます");
//     throwError();
//     console.log("エラーを発生させました");
//   } finally {
//     console.log("finallyブロック");
//   }
//   console.log("try分の後ろ");
// }

{
  console.log(sum(100));
  function sum(max: number): number {
    try {
      let result = 0;
      for (let i = 1; i <= max; i++) {
        result += i;
      }
      return result;
    } finally {
      console.log("sumから脱出します!");
    }
  }
}

{
  class EmptyArrayError extends Error {}

  try {
    console.log(getAverage([1, 2, 3]));
    getAverage([]);
  } catch (err) {
    if (err instanceof EmptyArrayError) {
      console.log("EmptyArrayErrorをキャッチしました");
    } else {
      throw err;
    }
  }

  function getAverage(nums: number[]): number {
    if (nums.length === 0) {
      throw new EmptyArrayError("配列が空です");
    }
    return sum(nums) / nums.length;
  }

  function sum(nums: number[]): number {
    let result = 0;
    for (const num of nums) {
      result += num;
    }
    return result;
  }
}
