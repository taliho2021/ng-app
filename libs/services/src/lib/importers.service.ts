import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImportersService {

  constructor(private http: HttpClient) { }

   getAll() {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=' 
    );
  }
}
