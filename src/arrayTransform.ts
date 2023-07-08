import { starWarsCharacters } from "./starWarsCharacters";

// return the characters sorted by heights. 
export function sortByHeight<T extends typeof starWarsCharacters>(characters: T): T {
}

// return the sum of all characters - bonus without for loops.
export function totalMassOfCharacters(characters: typeof starWarsCharacters): number {
}

// return a boolean that indicate if there is character taller that 200
export function includeTallDude(characters: typeof starWarsCharacters): boolean {
}