import { Component } from '@angular/core';
import { DataFacade } from 'src/app/store/facade';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent {

  // possible improvement - activate button when data arrives
  public isReady = true;

  constructor(private facade: DataFacade) {}

  playGame(): void {
    this.facade.playGame();
  }

}
