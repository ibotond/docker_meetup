import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  numberOfLegs: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
export class AppComponent {
  title='frontend';
  displayedColumns: string[] = ['position', 'name', 'numberOfLegs', 'actions'];
  dataSource = ELEMENT_DATA;
}
