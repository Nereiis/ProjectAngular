import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpasService {

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
}
