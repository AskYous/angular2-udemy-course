import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  displayDetails = false;
  clicks = [];

  constructor() {
  }

  ngOnInit() {
  }

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.clicks.push(new Date());
  }
}
