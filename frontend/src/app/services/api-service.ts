import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addAnimal(name: string, numberOfLegs: Number): Observable<any>{
    return this.http.post(environment.API+environment.addAnimal, {
      name: name,
      numberOfLegs: numberOfLegs
    })
  }

  deleteAnimal(id:Number): Observable<any>{
    return this.http.delete(environment.API+environment.deleteAnimal+'/'+id)
  }

  getAnimals(): Observable<any>{
    return this.http.get(environment.API+environment.getAnimals)
  }
}
