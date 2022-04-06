import { AccountService } from './../../../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adding-adress',
  templateUrl: './adding-adress.component.html',
  styleUrls: ['./adding-adress.component.css']
})
export class AddingAdressComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter(); 
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  
  // addadress (){
  //   this.accountService.addadress(this.model).subscribe(response => {
  //     console.log(response);
  //     this.cancel();
  //   }, error => {
  //     console.log(error);
  //     this.toastr.error(error.error);
  //   })
  // }

  cancel (){
    this.cancelRegister.emit(false);
  }

}