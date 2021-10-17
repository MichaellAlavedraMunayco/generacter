/* eslint-disable prettier/prettier */
import { CharacterRepository } from '../repositories/character.repository';
import { CharacterRules } from '../rules/character.rules';
import { Character } from '../entities/character';


export class CharacterController {


  repository: CharacterRepository;


  constructor(repository: CharacterRepository) {
    this.repository = repository;
  }

  createCharacter(character: Character): Character {

    CharacterRules.validate(character);

    return this.repository.createCharacter(character);
  }

  updateCharacter(character: Character): Character {
    return this.repository.updateCharacter(character);
  }

  deleteCharacter(character: Character): Character {
    return this.repository.deleteCharacter(character);
  }

}
