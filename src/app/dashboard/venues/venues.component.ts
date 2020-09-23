import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddVenueComponent} from './add-venue/add-venue.component'
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { VenueService } from '../../services/venue.service';
import { Observable } from 'rxjs';
import { IVenue } from '../../model/venue.model';
import { QrComponent } from './qr/qr.component';
@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'email','city','action'];
  venues$: Observable<IVenue[]>
  constructor(
    public dialog: MatDialog,
    private venueService:VenueService
  ) { 
    this.venues$=this.venueService.getAllVenues();
  }

  ngOnInit(): void {
    
    // this.addVenue();
  }
  addVenue(): void {
    const dialogRef = this.dialog.open(AddVenueComponent, {
      width: '75%',
      hasBackdrop:true,
      maxWidth:'650px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  getQR(venue:IVenue){
    const dialogQRRef = this.dialog.open(QrComponent, {
      // width: '75%',
      hasBackdrop:true,
      // maxWidth:'650px',
      data: {data:venue.id,title:venue.name}
    });

    dialogQRRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
