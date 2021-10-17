/* eslint-disable prettier/prettier */
import { Character } from '../entities/character';

export interface CharacterRepository {

  createCharacter(character: Character): Character

  updateCharacter(character: Character): Character

  deleteCharacter(character: Character): Character

}
