const r = /ab+c/;
console.log(r.test("abbbbc"));
console.log(r.test("Hello, abc world!"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは"));

{
  const r = /^abc/;
  console.log(r.test("abcdefg"));
  console.log(r.test("Hello, abcdefg"));

  console.log("Hello, abbbbbc World abbc".replace(/ab+c/, "foobar"));
  console.log("Hello, abbbbbc World abbc".replace(/ab+c/g, "foobar"));


  const result = "Hello, abbbbc World! abc".match(/a(b+)(c)/);
  if(result !== null) {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
  }

}

{

  const result = "Hello, abbbbbc World! abc".match(/a(?<worldName>b+)c/);
  if(result !== null) {
    console.log(result.groups);
    
  }
  console.log(result)
}
