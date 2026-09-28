function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => `Hola ${name}`;

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: 'ASD-45',
    username: 'my-user',
  };
}

const getUser2 = (): User => ({
  uid: 'ASD-45',
  username: 'my-user',
});

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] =
  [1, 2, 3, 4, 5, 6];

/*myNumbers.forEach(function (value) {
  const result = value + 1;
  console.log({ result });
});*/

myNumbers.forEach((value): void => {
  const result = value + 1;
  console.log({ result });
});

//myNumbers.forEach(console.log);