import { Apartment } from './../../_models/apartment';
import { Member } from './../../_models/member';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfo} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css']
})
export class ApartmentCardComponent implements OnInit {

registerShow = false;


@Output() public apartmentt= new EventEmitter<any>();
@Input() apartment: Apartment;


bsModalRef: BsModalRef;
  constructor() {library.add(faInfo); }

  ngOnInit( ): void {this.apartmentt.emit(this.apartment)
  }
   



  registerToggle3(){
    
    this.registerShow = !this.registerShow;
  }
  

}
