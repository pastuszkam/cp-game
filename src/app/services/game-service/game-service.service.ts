import { Injectable } from '@angular/core';
import { IPerson, IStarship, Resource } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private generateCards(resource: IStarship[] | IPerson[]): [IStarship | IPerson, IStarship | IPerson] {
    const cardOne = resource[Math.floor(Math.random() * 10)];
    const cardTwo = resource[Math.floor(Math.random() * 10)];

    // prevent from equal score
    if (cardOne.name !== cardTwo.name) {
      return [cardOne, cardTwo];
    }
    return this.generateCards(resource);
  }

  public triggerGame(
    type: Resource.People | Resource.Starships,
    starships: IStarship[],
    people: IPerson[]): any {
    if (type === Resource.Starships) {
      const [cardOne, cardTwo] = this.generateCards(starships);
      return {
        cards: [cardOne, cardTwo],
        winner: Number((cardOne as IStarship).crew) > Number((cardTwo as IStarship).crew) ? 0 : 1,
      };
    } else {
      const [cardOne, cardTwo] = this.generateCards(people);
      return {
        cards: [cardOne, cardTwo],
        winner: Number((cardOne as IPerson).mass) > Number((cardTwo as IPerson).mass) ? 0 : 1,
      };
    }
  }
}
