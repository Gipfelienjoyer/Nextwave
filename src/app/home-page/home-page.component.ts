import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../models/appointment.model";

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
  items: Appointment[] = [];
  selectedData: Appointment = {
    date: '',
    time: '',
    title: '',
    desc: ''
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        this.items = data.appointments;
        this.selectedData = this.items[0]; // Select the first appointment
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
