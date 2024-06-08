// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { Appointment } from "./models/appointment.model";
import { ToDo } from "./models/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private appointmentUrl = 'assets/testAppointments.json';
  private todoUrl = 'assets/testToDo.json'

  constructor(private http: HttpClient) { }

  getAppointmentData(): Observable<{ appointments: Appointment[] }> {
    return this.http.get<{ appointments: Appointment[] }>(this.appointmentUrl);
  }

  getToDoData(): Observable<{ ToDo: ToDo[] }> {
    return this.http.get<{ ToDo: ToDo[] }>(this.todoUrl)
  }
}

