import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating!: number;
  cropWidth: number | any;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>(); 

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick() {
    const message = `This prooduct rating is ${this.rating}`;
    this.notify.emit(message);

  }
}
