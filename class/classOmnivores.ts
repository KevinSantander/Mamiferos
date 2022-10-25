import { Mammals } from "./classMammals";

export  class Omnivores extends Mammals {
  
  public constructor(pName: string, pEat: string, pPaws: number, pDisplace: number) {
    super(pName, pEat, pPaws, pDisplace)
  }

  public setEat(paramEat: string): void {
    this.eat = paramEat;
  }

  public setMaximumSpeed(): void {
    this.displace_KM = 17;
  }

}