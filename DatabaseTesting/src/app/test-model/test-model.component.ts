import { Component, OnInit } from '@angular/core';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
   styleUrls: ['./test-model.component.css']
})
export class TestModelComponent implements OnInit {

  public tutor= [];
  public errorMsg;

  constructor(private _testing: TestingService) { }

  ngOnInit() {
    this._testing.getTutorData()
    .subscribe(data => this.tutor= data);
  }

}
