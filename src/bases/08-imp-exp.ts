import { heroes, Owner, type Hero } from '../data/heroes.data';

export const getHeroeById = (id: number): Hero => {
  const hero = heroes.find((heroe) => heroe.id === id);
  if (!hero) throw new Error(`Hero with id ${id} not found`);
  return hero;
};

export const getHeroeByOwner = (owner: Owner): Hero[] =>
  heroes.filter((heroe) => heroe.owner === owner);


console.log(getHeroeByOwner(Owner.DC));