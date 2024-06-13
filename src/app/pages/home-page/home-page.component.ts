import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../../models/appointment.model";
import {ToDo} from "../../models/appointment.model"
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  links = {
    "Home": "/home",
    "Log in": "/login"
  }
  appointmentItems: Appointment[] = [];
  toDoItems: ToDo[] = [];


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getAppointmentData().subscribe(
      data => {
        this.appointmentItems = data.appointments;
        },
      error => {
        console.error('Error fetching data', error);
      }
    );

    this.dataService.getToDoData().subscribe(
      data => {
        this.toDoItems = data.ToDo;
      },
      error => {
        console.error('Error fetching data', error);
      }
    )

    this.dataService.getHelloWorld().subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log('Error', error)
      }
    )
  }
}
