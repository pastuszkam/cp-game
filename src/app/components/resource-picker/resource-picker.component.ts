import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFacade } from 'src/app/store/facade';
import { Resource } from '../../models';

@Component({
  selector: 'app-resource-picker',
  templateUrl: './resource-picker.component.html',
  styleUrls: ['./resource-picker.component.scss']
})
export class ResourcePickerComponent implements OnInit {

  public Resource = Resource;
  public selectedValue$: Observable<Resource>;

  constructor(private facade: DataFacade) {
  }

  ngOnInit(): void {
    this.selectedValue$ = this.facade.pickedResource$;
  }

  onValueChange(resource: Resource): void {
    this.facade.changeResource(resource);
  }

}
