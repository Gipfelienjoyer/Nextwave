import {
  Component,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {DatePipe} from "@angular/common";
import {After} from "node:v8";
import {DataService} from "../data.service";

@Component({
  selector: 'DataDisplay',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnChanges, AfterViewInit {
  @Input() appointment: { date: string, time: string, title: string, desc: string } = {
    date: "",
    time: "",
    title: "",
    desc: ""
  };
  @Input() todo: { title: string, priority: string, status: string, description: string } = {
    title: "",
    priority: "",
    status: "",
    description: ""
  }
  rotated = false;
  appointments = false;
  formattedDate: string | null = "";
  maxWidth = 100;
  Title = "";
  Time = "";
  Description = "";
  @ViewChild('SourceDiv') sourceDiv!: ElementRef;

  constructor(private datePipe: DatePipe, private renderer: Renderer2, private dataService: DataService) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['appointment'] && changes['appointment'].currentValue) {
      this.formattedDate = this.appointment.date;
      this.formatDate();

      this.Title = this.appointment.title;
      this.Description = this.appointment.desc;
      this.appointments = true;
      console.log(this.Description)
    }

    if (changes['todo'] && this.todo) {
      this.Title = this.todo.title;
      this.Description = this.todo.description;
      this.appointments = false;
    }
  }

  radioAPI() {
    if (this.todo.status !== "Done") {
      this.todo.status = "Done"
    }
    else {
      this.todo.status = "NotDone"
    }
    this.dataService.updateAppointmentData(this.todo)
  }

  ngAfterViewInit() {
    this.maxWidth = this.sourceDiv.nativeElement.offsetWidth;
  }

  formatDate(): void {
    const dateObject = new Date(this.appointment.date);
    this.formattedDate = this.datePipe.transform(dateObject, 'dd.MM');
  }


  toggleRotated(): void {
    this.rotated = !this.rotated;
    this.maxWidth = this.sourceDiv.nativeElement.offsetWidth;
  }
}
