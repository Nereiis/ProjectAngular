import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrucerosService {

  public db_url : string = 'http://localhost:5000/cruceros';

  constructor(private http: HttpClient) { }

  getCruceros() {
    return this.http.get(this.db_url);
  }

  getCruceroById(id: string) {
    return this.http.get(`${this.db_url}/${id}`);
  }
}
