import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { ApiService } from './services/api-service';

export interface Animal {
  name: string;
  position: number;
  numberOfLegs: number;
}

const ELEMENT_DATA: Animal[] = [
  {position: 1, name: 'Cat (pussy)', numberOfLegs: 4},
  {position: 2, name: 'Octopussy', numberOfLegs: 8},
  {position: 3, name: 'Dog', numberOfLegs: 4},
  {position: 4, name: '(bus)Snake', numberOfLegs: 0},
  {position: 5, name: 'D(u/i)ck', numberOfLegs: 2},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='frontend';
  displayedColumns: string[] = ['position', 'name', 'numberOfLegs', 'actions'];
  dataSource : Animal[]= [];

  constructor(
    private dialog: MatDialog,
    private service: ApiService
  ){}

  ngOnInit(): void {
    this.getAndLoadAnimals();
  }

  getAndLoadAnimals(){
    this.service.getAnimals().subscribe(res=>{
        this.dataSource = []
        res.forEach((element:any) => {
          let animal:Animal={
            name: element.name,
            position: element.id,
            numberOfLegs: element.numberOfLegs
          }
          this.dataSource.push(animal);
        });
      }, err=> {
        console.log(err);
      })
  }

  openDialog(){
    const dialogRef = this.dialog.open(ModalComponent, {
      width:'250px'
    })

    dialogRef.afterClosed().subscribe(res => {
      this.getAndLoadAnimals();
    })
  }

  delete(id:number){
    this.service.deleteAnimal(id).subscribe(res=>this.getAndLoadAnimals());
  }
}
