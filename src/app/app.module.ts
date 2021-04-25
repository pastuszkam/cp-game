import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule} from '@angular/material/chips';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { gameReducer } from './store/reducer';
import { DataStoreEffects } from './store/effects';
import { ResourcePickerComponent } from './components/resource-picker/resource-picker.component';
import { CardComponent } from './components/card/card.component';
import { FEATURE_KEY } from './models';

@NgModule({
  declarations: [
    AppComponent,
    PlayButtonComponent,
    CardsContainerComponent,
    ResourcePickerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      // in a real app we should design the store better
      // here we keep it in one 'game' key to make it faster to implement
      [FEATURE_KEY]: gameReducer
    }),
    EffectsModule.forRoot([DataStoreEffects]),
    StoreDevtoolsModule.instrument(),
    NoopAnimationsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
