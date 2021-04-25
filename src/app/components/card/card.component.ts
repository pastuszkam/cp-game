import { Component, OnInit, Input } from '@angular/core';
import { IPerson, IPlayer, IStarship } from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() player: IPlayer;

  constructor() { }

  ngOnInit(): void {
  }

}
