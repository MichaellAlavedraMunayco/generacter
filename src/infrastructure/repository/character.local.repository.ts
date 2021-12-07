/* eslint-disable prettier/prettier */
import { CharacterRepository } from '../../domain/repositories/character.repository';
import { Character } from '../../domain/entities/character';

export class CharacterLocalRepository implements CharacterRepository {

  createCharacter(character: Character): Character {

    console.log(character);
    console.log(`${character.name} created`);

    return character;
  }

  updateCharacter(character: Character): Character {

    console.log(character);
    console.log(`${character.name} updated`);

    return character;
  }

  deleteCharacter(character: Character): Character {

    console.log(character);
    console.log(`${character.name} deleted`);

    return character;
  }

}
