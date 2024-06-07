import { Component, Input, OnChanges, Renderer2, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'DataDisplay',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnChanges, AfterViewInit {
  @Input() appointment: { date: string, time: string, title: string, desc: string } = { date: "", time: "", title: "", desc: "" };
  @ViewChild('SourceDiv') sourceDiv!: ElementRef;
  @ViewChild('TargetDiv') targetDiv!: ElementRef;
  rotated = false;
  formattedDate: string | null = "";

  constructor(private datePipe: DatePipe, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointment'] && changes['appointment'].currentValue) {
      this.formattedDate = this.appointment.date;
      this.formatDate();
    }
  }

  ngAfterViewInit() {
    this.setWidth();
  }

  formatDate(): void {
    const dateObject = new Date(this.appointment.date);
    this.formattedDate = this.datePipe.transform(dateObject, 'dd.MM');
  }

  setWidth(): void {
      const sourceDivWidth = this.sourceDiv.nativeElement.offsetWidth;
      this.renderer.setStyle(this.targetDiv.nativeElement, 'max-width', `${sourceDivWidth}px`);
      console.log(sourceDivWidth);
  }

  toggleRotated(): void {
    this.rotated = !this.rotated;
    if (this.rotated) {
      this.setWidth();
    }
  }
}
