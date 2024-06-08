import { Component, Input, OnChanges, Renderer2, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import {After} from "node:v8";

@Component({
  selector: 'DataDisplay',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnChanges, AfterViewInit {
  @Input() appointment: { date: string, time: string, title: string, desc: string } = { date: "", time: "", title: "", desc: "" };
  @Input() todo: { title: string, priority: string, status: string, description: string} = {title: "", priority: "", status: "", description: ""}
  rotated = false;
  formattedDate: string | null = "";
  maxWidth = 100;
  Title = "";
  Time = "";
  Description = "";
  @ViewChild('SourceDiv') sourceDiv!: ElementRef;
  constructor(private datePipe: DatePipe, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointment'] && changes['appointment'].currentValue) {
      this.formattedDate = this.appointment.date;
      this.formatDate();
    }
  }

  ngAfterViewInit() {
    this.maxWidth = this.sourceDiv.nativeElement.offsetWidth;
    if (this.appointment){
      this.Title = this.appointment.title;
      this.Description = this.appointment.desc;
    }

    else if (this.todo) {
      this.Title = this.todo.title;
      this.Description = this.todo.description;
      console.log(this.todo)
    }

    else{
      this.Title = "Error"
    }
  }

  formatDate(): void {
    const dateObject = new Date(this.appointment.date);
    this.formattedDate = this.datePipe.transform(dateObject, 'dd.MM');
  }


  toggleRotated(): void {
    this.rotated = !this.rotated;
    if (this.rotated) {
    }
  }
}
