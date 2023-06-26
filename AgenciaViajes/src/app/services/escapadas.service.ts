import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViajesI } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EscapadasService {
  id: String = ""
  escapada!: ViajesI

  public db_url : string = 'http://localhost:5000/escapadas';

  constructor(private http: HttpClient) { }

  getEscapadas() {
    return this.http.get(this.db_url);
  }

  getEscapadaById(id: string) {
    return this.http.get(`${this.db_url}/${id}`);
  }

  deleteEscapada(id: string) {
    return this.http.delete(`${this.db_url}/${id}`)
  }
  editEscapada(escapada: ViajesI, id: string){
    return this.http.put(`${this.db_url}/${id}`, escapada)
  }

  setEscapada(escapada: ViajesI, id: string){
    this.escapada = escapada
    this.id = id
  }

  getOneEscapada(){
    return this.escapada
  }

  getId(){
    return this.id
  }

  postEscapada(escapada:ViajesI){
    return this.http.post(`${this.db_url}`, escapada)
  }
}
