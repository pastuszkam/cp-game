import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { Resource } from 'src/app/models';
import { DataFacade } from 'src/app/store/facade';

import { CardsContainerComponent } from './cards-container.component';
describe('CardsContainerComponent', () => {
  let component: CardsContainerComponent;
  let fixture: ComponentFixture<CardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [ CardsContainerComponent ],
      providers: [
        { provide: DataFacade, useValue: MockService(DataFacade) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
