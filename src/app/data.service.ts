// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';
import { Appointment } from "./models/appointment.model";
import { ToDo } from "./models/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private appointmentUrl = 'assets/testAppointments.json';
  private todoUrl = 'assets/testToDo.json'
  private apiUrl = 'assets'

  constructor(private http: HttpClient) { }

  getAppointmentData(): Observable<{ appointments: Appointment[] }> {
    return this.http.get<{ appointments: Appointment[] }>(`${this.apiUrl}/testAppointments.json`);
  }

  getToDoData(): Observable<{ ToDo: ToDo[] }> {
    return this.http.get<{ ToDo: ToDo[] }>(`${this.apiUrl}/testToDo.json`)
  }

  updateAppointmentData(data: any): Observable<any> {
    console.log('Mock post data:', data);
    return of({ success: true, message: 'Data logged successfully' });
  }

  getHelloWorld(): Observable<string> {
    return this.http.get('http://localhost:3000', { responseType: 'text' });
  }
}

