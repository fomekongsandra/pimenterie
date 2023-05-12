import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { IPiment } from '../intefaces/IPiment';

@Injectable({
  providedIn: 'root'
})
export class PimentServiceService {
  readonly API_URL:string="assets/data/piment.json" // ca peut etre un lien http qui renvoi les donnees
  
  piments : IPiment[] = [] 

  constructor (private client: HttpClient)
  {
    this.get().subscribe(piments=>this.piments= piments)
  }

  get():Observable<IPiment[]> {
    return this.client.get<IPiment[]>(this.API_URL)
  }
  getAllPiment(): Observable<IPiment[]>{
    return this.piments.length > 0 ? of(this.piments) : this.get()
  }

  getOnePiment(id:number):Observable<IPiment>{
    // @ts-ignore
    return this.piments.length > 0 ? of(this.piments).pipe(
      map(piments=>piments.find(piment=>piment.reference === id))
    ) :
    this.get().pipe(
      map(piments=>piments.find(piment=>piment.reference === id) )
    );
  }

  createPiment(newPiment:IPiment){
    console.log('eeeeeeee '+newPiment.reference)
    this.piments.push(newPiment);
  }
}
