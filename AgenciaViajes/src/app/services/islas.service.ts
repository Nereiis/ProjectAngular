import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViajesI } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class IslasService {

  id: String = ""
  isla!: ViajesI

  public db_url : string = 'http://localhost:5000/islas';

  constructor(private http: HttpClient) { }

  getIslas() {
    return this.http.get(this.db_url);
  }

  getIslaById(id: string) {
    return this.http.get(`${this.db_url}/${id}`);
  }

  deleteIsla(id: string) {
    return this.http.delete(`${this.db_url}/${id}`)
  }

  editIsla(isla: ViajesI, id: string){
    return this.http.put(`${this.db_url}/${id}`, isla)
  }

  setIsla(isla: ViajesI, id: string){
    this.isla = isla
    this.id = id
  }

  getOneIsla(){
    return this.isla
  }

  getId(){
    return this.id
  }

  postIsla(isla:ViajesI){
    return this.http.post(`${this.db_url}`, isla)
  }
}
