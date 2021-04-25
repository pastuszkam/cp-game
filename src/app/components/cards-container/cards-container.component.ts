import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/models';
import { DataFacade } from '../../store/facade';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  public players$: Observable<IPlayer[]>;

  constructor(private facade: DataFacade) {}

  ngOnInit(): void {
    this.facade.fetchAll();
    this.players$ = this.facade.players$;
  }

}
