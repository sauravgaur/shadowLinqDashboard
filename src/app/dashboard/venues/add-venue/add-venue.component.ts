import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VenueService} from '../../../services/venue.service'
import { IVenue } from '../../../model/venue.model';
import { DocumentReference } from '@angular/fire/firestore/interfaces';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.css']
})
export class AddVenueComponent implements OnInit {
  isLinear = false;
  title="Create new venue";
  detailFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  adrressFormGroup: FormGroup;
  venueid:string;

  constructor(
    private _formBuilder: FormBuilder,
    private venueService:VenueService
  ) {
    this.venueid="6P0gyppyACAOMV9P1c4S"
  }

  ngOnInit() {
    this.detailFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required]
    });
    this.contactFormGroup = this._formBuilder.group({
      manager_name: [null, Validators.required],
      contact_number: [null, Validators.required],
      contact_number1: [null, null],
      email:[null,null],
      website:[null,null]
    });
    this.adrressFormGroup = this._formBuilder.group({
      adress_line_1: [null, Validators.required],
      adress_line_2:[null,null],
      floor_number:[null,null],
      pin_code:[null, Validators.required],
      city:[null,Validators.required],
      state:[null,Validators.required],
      country:[null,Validators.required]
    });
  }
  async saveVenue(){
    let venue:IVenue={
      ...this.detailFormGroup.value,
      ...this.adrressFormGroup.value,
      ...this.contactFormGroup.value
    }
    console.log("venue-->",venue);
    let venueRef:DocumentReference= await this.venueService.addVenue(venue);
    
  }

}
