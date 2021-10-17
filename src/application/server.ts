/* eslint-disable prettier/prettier */
import { CharacterGenerationUseCase } from '../../usecases/character.generation.use.case';

class Server {

  public static start(): void {

    CharacterGenerationUseCase.execute();

  }

}

Server.start();
