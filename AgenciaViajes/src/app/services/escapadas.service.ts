import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscapadasService {

  public db_url : string = 'http://localhost:5000/escapadas';

  constructor(private http: HttpClient) { }

  getEscapadas() {
    return this.http.get(this.db_url);
  }

  getEscapadaById(id: string) {
    return this.http.get(`${this.db_url}/${id}`);
  }
}
