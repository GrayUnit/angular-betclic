import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  state: string;
  name: string;
  ca: number;
  comment: string;
  constructor(obj?: Partial<Client>) {
    if(obj) {
      Object.assign(this, obj);
    }
  }
}