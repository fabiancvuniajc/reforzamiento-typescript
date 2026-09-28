const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman'
};

const { key, name: ironmanName, age } = person;

/*const name = person.name;
const age = person.age;
const key = person.key;*/

console.log({ ironmanName, age, key });

interface Hero { name: string; age: number; key: string; rank?: string; }

const useContext =
  ({ key, name, age, rank = 'sin rango' }: Hero) => {
    return {
      keyName: key,
      user: {
        name,
        age
      },
      rank: rank
    };
  };

const { rank, keyName, user } = useContext(person);
const { name } = user;
console.log({ rank, keyName, name });

const estudiante = {
  nombre: 'Juan',
  edad: 20,
  carrera: 'Ingeniería',
  universidad: 'Universidad Nacional'
};

const { nombre, edad, carrera, universidad } = estudiante;

const nuevaEdad = edad + 1;
const correccionNombre = 'Pedro Perez';
const cambioDeCarrera = 'Medicina';

estudiante.edad = 21;

console.log(`El estudiante ${correccionNombre} 
  tiene ${nuevaEdad} años, estudia ${cambioDeCarrera} en la ${universidad}.`);
console.log({ nombre, edad, carrera, universidad });
console.log(`El estudiante con la nueva edad es: ${estudiante.edad}`);