import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IslasService {

  public db_url : string = 'http://localhost:5000/islas';

  constructor(private http: HttpClient) { }

  getIslas() {
    return this.http.get(this.db_url);
  }

  getIslaById(id: string) {
    return this.http.get(`${this.db_url}/${id}`);
  }
}
