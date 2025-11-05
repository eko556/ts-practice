{{}  type User = {
    name: string;
    age: number;
  }

  // function createUser(name: string, age: number): User {
  //   if (name === ""){
  //     throw new Error("名前は空にできません!");
  //   }
  //   return {
  //     name,
  //     age
  //   };
  function createUser(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません");
    }
    return (message:string) =>`${name} (${age}) 「${message}」`;
  }
  function getMessage(user: User, message: string): string {
    return `${user.name} (${user.age}) 「${message}」`;
  }

  const uhyo = createUser("uhyo", 26);
  console.log(getMessage(uhyo, "こんにちは"));

}
{
  class User {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
      if (name === "") {
        throw Error("名前は空にできません!");
      }
      this.name = name;
      this.age = age;
    }
    getMessage(message: string): string {
      return `${this.name} (${this.age}) 「${message}」`;
    }
  }

  const enomoto = new User("enomoto", 26);
  console.log(enomoto.getMessage("こんばんは"));
}