import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  animalName:string = "";
  numberOfLegs:Number = 0;
  
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  add(){

  }
}
