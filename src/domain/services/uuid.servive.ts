/* eslint-disable prettier/prettier */
import { v4 as uuidv4, validate } from 'uuid';

export class UUIDService {

  public static getUUID(): string {

    return uuidv4();
  }

  public static isValidUUID(uuid: string) {

    return validate(uuid);
  }

}
