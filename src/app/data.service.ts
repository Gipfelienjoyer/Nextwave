// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Appointment} from "./models/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'assets/testdata.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<{ appointments: Appointment[] }> {
    return this.http.get<{ appointments: Appointment[] }>(this.apiUrl);
  }
}
