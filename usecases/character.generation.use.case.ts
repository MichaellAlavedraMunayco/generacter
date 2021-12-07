/* eslint-disable prettier/prettier */
import { CharacterLocalRepository } from '../src/infrastructure/repository/character.local.repository';
import { CharacterController } from '../src/domain/controllers/character.controller';
import { Character } from '../src/domain/entities/character';

export class CharacterGenerationUseCase {

  public static execute(): void {

    try {

      const repository = new CharacterLocalRepository();
      const controller = new CharacterController(repository);

      const character = new Character('Michaell Alavedra');

      controller.createCharacter(character);

      console.info('CharacterGenerationUseCase executed successfully');

    } catch (error) {

      console.error(error);
      console.error('CharacterGenerationUseCase not passed');

    }

  }

}
