/* eslint-disable prettier/prettier */
import { UUIDService } from '../services/uuid.servive';

export class Character {

  private _id: string;
  private _name: string;


  constructor(name: string) {
    this._id = UUIDService.getUUID();
    this._name = name;
  }


  public get id() {
    return this._id;
  }


  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }


}
