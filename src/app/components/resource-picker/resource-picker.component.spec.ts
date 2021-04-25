import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataFacade } from 'src/app/store/facade';
import { MockService } from 'ng-mocks';
import { ResourcePickerComponent } from './resource-picker.component';
import { of } from 'rxjs';
import { Resource } from 'src/app/models';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

describe('ResourcePickerComponent', () => {
  let component: ResourcePickerComponent;
  let fixture: ComponentFixture<ResourcePickerComponent>;

  const changeResourceSpy = jasmine.createSpy();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonToggleModule,
      ],
      declarations: [
        ResourcePickerComponent,
      ],
      providers: [
        { provide: DataFacade, useValue: MockService(DataFacade, {
          pickedResource$: of(Resource.People),
          changeResource: changeResourceSpy,
        }) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    changeResourceSpy.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call facades method when resource-picker changes', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('mat-button-toggle-group');
    button.dispatchEvent(new Event('change'));
    tick();
    expect(changeResourceSpy).toHaveBeenCalledWith(Resource.People);
  }));
});
