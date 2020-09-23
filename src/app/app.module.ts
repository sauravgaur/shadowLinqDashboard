import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LeftMenuComponent } from './dashboard/left-menu/left-menu.component';
import { HeaderComponent } from './dashboard/header/header.component';

import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './dashboard/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog'
import {MatStepperModule} from '@angular/material/stepper';
import { VenuesComponent } from './dashboard/venues/venues.component';
import { AddVenueComponent } from './dashboard/venues/add-venue/add-venue.component';

import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from './dashboard/venues/qr/qr.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    LeftMenuComponent,
    HeaderComponent,
    NavComponent,
    VenuesComponent,
    AddVenueComponent,
    QrComponent
  ],
  imports: [
    QRCodeModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
   HttpClientModule,
   FormsModule  ,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
