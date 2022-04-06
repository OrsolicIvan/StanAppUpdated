import { Apartment } from './../../_models/apartment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  @Input() apartment: Apartment;
  @Input() public apartmentt : Array <any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
