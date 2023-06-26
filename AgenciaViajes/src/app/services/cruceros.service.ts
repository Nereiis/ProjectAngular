import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViajesI } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CrucerosService {

  id!: String
  crucero!: ViajesI

  public db_url : string = 'http://localhost:5000/cruceros';

  constructor(private http: HttpClient) { }

  getCruceros() {
    return this.http.get(this.db_url);
  }

  getCruceroById(id: string) {
    return this.http.get(`${this.db_url}/${id}`);
  }

  deleteCrucero(id: string) {
    return this.http.delete(`${this.db_url}/${id}`)
  }

  editCrucero(crucero: ViajesI, id: string){
    return this.http.put(`${this.db_url}/${id}`, crucero)
  }

  setCrucero(crucero: ViajesI, id: string){
    this.crucero = crucero
    this.id = id
  }

  getOneCrucero(){
    return this.crucero
  }

  getId(){
    return this.id
  }
}
