/* eslint-disable prettier/prettier */

export class AnotherUseCase {

  public static execute(): void {

    try {

      console.info('CharacterGenerationUseCase executed successfully');

    } catch (error) {

      console.error(error);
      console.error('CharacterGenerationUseCase not passed');

    }

  }

}
