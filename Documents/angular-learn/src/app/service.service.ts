import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  api = config.API_URL;

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(`${this.api}/empData.json`);
  }
}
