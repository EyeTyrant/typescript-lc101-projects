import { Payload } from "./Payload";
export class Astronaut implements Payload {
  // props and methods
  massKg: number;
  name: string;
  constructor(massKg: number, name: string) {
    this.massKg = massKg;
    this.name = name;
  }
}
