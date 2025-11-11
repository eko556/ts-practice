{
  type Animal = {
    species: string;
  };
  type Human = {
    name: string;
    age?: number;
  };
  type User = Animal | Human;

  const tama: User = {
    species: "Felis silvestris catus",
  };
  const uhyo: User = {
    name: "uhyo",
    age: 26,
  };
  const john: Human = {
    name: "John Smith",
  };
}

{
  type Animal = {
    species: string;
    age: string;
  };
  type Human = {
    name: string;
    age: number;
  };

  type User = Animal | Human;

  const tama: User = {
    species: "Felis silvestris catus",
    age: "永遠の17歳",
  };

  const uhyo: User = {
    name: "uhyo",
    age: 26,
  };

  function showAge(user: User) {
    const age = user.age;
    console.log(age);
  }

  type MysteryFunc = ((str: string) => string) | ((str: string) => number);
  function useFunc(func: MysteryFunc) {
    const result = func("uhyo");
    console.log(result);
  }
  function getName(str: string): string {
    return str.concat();
  }
  useFunc(getName);
}

{
  //インターセクション型
  type Animal = {
    species: string;
    age: number;
  };
  type Human = Animal & {
    name: string;
  };

  const tama: Animal = {
    species: "Felis silvestris catus",
    age: 3,
  };
  const uhyo: Human = {
    species: "Homo sapiens sapiens",
    age: 26,
    name: "uhyo",
  };
  // never型
  type StringAndNumber = string & number;
}

{
  const uhyo: Human = {
    name: "uhyo",
  };
  type Human = { name: string };
  type Animal = { species: string };
  function getName(human: Human) {
    return human.name;
  }
  function getSpecies(animal: Animal) {
    return animal.species;
  }

  // 関数型のユニオンには、引数にインターセクション型を渡す必要がある。
  //以下の場合だと Human & Animal型を渡さなければならない
  const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;

  const eno: Human & Animal = {
    name: "eno",
    species: "Homo sapiens sapiens",
  };
  mysteryFunc(eno);
}
