import { Injectable } from '@angular/core';
import { IVenue } from '../model/venue.model';
import {AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  venueCollection: AngularFirestoreCollection<IVenue>
  constructor(
    private afs: AngularFirestore,
  ) { 
    this.venueCollection=afs.collection<IVenue>("venue")
  }
  async addVenue(venue:IVenue){
    return this.venueCollection.add(venue)
  }

  getAllVenues(){
    return this.venueCollection.valueChanges({idField: 'id'})
  }
}
