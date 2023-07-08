import { expect, test } from 'vitest'
import { includeTallDude, sortByHeight, totalMassOfCharacters } from '../src/arrayTransform';
import { starWarsCharacters } from '../src/starWarsCharacters';

test("sortByHeight", () => {
    expect(sortByHeight(starWarsCharacters)).toEqual([
        {
            name: 'Leia Organa',
            height: 150,
            mass: 49,
            eye_color: 'brown',
            gender: 'female'
          },
          {
            name: 'Luke Skywalker',
            height: 172,
            mass: 77,
            eye_color: 'blue',
            gender: 'male'
          },
          {
            name: 'Anakin Skywalker',
            height: 188,
            mass: 84,
            eye_color: 'blue',
            gender: 'male'
          },
          {
            name: 'Darth Vader',
            height: 202,
            mass: 136,
            eye_color: 'yellow',
            gender: 'male'
          }
    ]);
});


test("totalMassOfCharacters", () => {
    expect(totalMassOfCharacters(starWarsCharacters)).toEqual(346);
} )

test("includeTallDude", () => {
    expect(includeTallDude(starWarsCharacters)).toEqual(true);
} )