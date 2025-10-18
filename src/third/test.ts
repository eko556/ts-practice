{
  type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  };

  const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
  const users: User[] = [];
  const dataArray = data.split("\n");
  for (const data of dataArray) {
    const userData = data.split(",");
    // const [name, ageString, premiumUserString] = data.split(",");
    // const age = Number(ageString);
    // const premiumUser = premiumUserString == "1";
    if (userData.length > 1) {
      const user: User = {
        name: userData[0],
        age: Number(userData[1]),
        premiumUser: userData[2] === "1" ? true : false,
      };
      users.push(user);
    }
  }

  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(
        `${user.name} (${user.age})はプレミアムユーザーではありません。`
      );
    }
  }
}
