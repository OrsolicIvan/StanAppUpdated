import { Apartment } from './../../_models/apartment';
import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() member: Member;
  apartments: Apartment[]
  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
  }
  loadApartments(){
    this.memberService.getApartments().subscribe(apartments => {
      this.apartments  = apartments ;
      if (apartments) console.log("radi")
      console.log(apartments )
      
    })
    
  }
}
