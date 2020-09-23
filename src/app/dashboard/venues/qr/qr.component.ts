import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  @ViewChild('qrattachedSec') qrElemRef: ElementRef;
  title:string;
  data:string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private payload: any,
  ) { }
  // payload
  ngOnInit(): void {
    this.title=this.payload.title;
    this.data=this.payload.data;
  }
  DownloadQR(){
    console.log(this.qrElemRef)
  }

}
