import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayButtonComponent } from './play-button.component';
import { MatButtonModule } from '@angular/material/button';
import { DataFacade } from 'src/app/store/facade';
import { MockService } from 'ng-mocks';
import { Resource } from 'src/app/models';
import { of } from 'rxjs';

describe('PlayButtonComponent', () => {
  let component: PlayButtonComponent;
  let fixture: ComponentFixture<PlayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule],
      declarations: [ PlayButtonComponent ],
      providers: [
        { provide: DataFacade, useValue: MockService(DataFacade, {}) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
