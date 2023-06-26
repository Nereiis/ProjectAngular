import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViajesI } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SpasService {

  id: String = ""
  spa!: ViajesI

  public db_url : string = 'http://localhost:5000/spas';

  constructor(private http: HttpClient) { }

  getSpas() {
    return this.http.get(this.db_url);
  }

  getSpaById(id: string) {
    return this.http.get(`${this.db_url}/${id}`);
  }

  deleteSpa(id: string) {
    return this.http.delete(`${this.db_url}/${id}`)
  }

  editSpa(spa: ViajesI, id: string){
    return this.http.put(`${this.db_url}/${id}`, spa)
  }

  setSpa(spa: ViajesI, id: string){
    this.spa = spa
    this.id = id
  }

  getOneSpa(){
    return this.spa
  }

  getId(){
    return this.id
  }

  postSpa(spa:ViajesI){
    return this.http.post(`${this.db_url}`, spa)
  }
}

