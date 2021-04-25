import { TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { ResourcePickerComponent } from './components/resource-picker/resource-picker.component';
import { FEATURE_KEY } from './models';
import { gameReducer } from './store/reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonToggleModule,
        MatCardModule,
        StoreModule.forRoot({
          [FEATURE_KEY]: gameReducer
        })
      ],
      declarations: [
        AppComponent,
        ResourcePickerComponent,
        PlayButtonComponent,
        CardsContainerComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
