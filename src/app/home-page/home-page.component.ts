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

  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        console.log('Full response:', data);
          this.items = data;
          console.log('Items:', this.items);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
