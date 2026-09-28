interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: '1234',
    city: 'New York'
  }
};

console.log(ironman);

//const spiderman = ironman; (esto no se puede hacer)

const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address!.city = 'Cali';

const hulk = structuredClone(spiderman);

hulk.firstName = 'Bruce';
hulk.lastName = 'Banner';
hulk.age = 50;
hulk.address!.city = 'Bogotá';

const thor: Person = {
  firstName: 'Thor',
  lastName: 'Odinson',
  age: 1500,
  address: {
    postalCode: '5678',
    city: 'Asgard'
  }
};

console.log({ ironman, spiderman, hulk, thor });