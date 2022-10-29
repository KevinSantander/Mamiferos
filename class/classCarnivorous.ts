import { Mammals } from "./classMammals";

export class Carnivorous extends Mammals {

  public constructor(pName: string, pEat: string, pPaws: number, pDisplace: number) {
    super(pName, pEat, pPaws, pDisplace)
  }

  public setMaximumSpeed(): void {
    this.displace_KM = 90;
  }
}