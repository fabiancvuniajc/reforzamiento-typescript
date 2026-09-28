const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , tercerPersonaje] = characterNames;

console.log({ tercerPersonaje });

const returnArrayFn = () => {
  return ['ABC', 123] as const;
};

const [letters, numbers] = returnArrayFn();

console.log(letters, numbers);

const useState = (value: string) => {
  return [value, (newValue: string) => {
    console.log(newValue);
  }] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');