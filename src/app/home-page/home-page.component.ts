import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  items: any = {};
  selectedData: any;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
          this.items = data;
      },
    );
    this.selectedData = this.items.appointments[1]
  }
}
