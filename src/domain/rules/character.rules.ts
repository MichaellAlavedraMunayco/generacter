/* eslint-disable prettier/prettier */
import { Character } from '../entities/character';
import { UUIDService } from '../services/uuid.servive';

export class CharacterRules {


  static validate(character: Character): void {

    this.idMustBeUUID(character);
    this.nameMustBeLongerThan10(character);

  }

  static idMustBeUUID(character: Character) {
    if (!UUIDService.isValidUUID(character.id)) throw new Error('Character id must be UUID');
  }

  static nameMustBeLongerThan10(character: Character) {
    if (character.name.length < 10) throw new Error('Character name must be longer than 10');
  }

}
