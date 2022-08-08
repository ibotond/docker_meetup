import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  animalName:string = "";
  numberOfLegs:Number = 0;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private service: ApiService
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  add(){
    this.service.addAnimal(this.animalName,this.numberOfLegs).subscribe(res => {
      this.dialogRef.close();
    })
  }
}
