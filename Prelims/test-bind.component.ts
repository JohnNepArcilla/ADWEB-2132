import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  studName=" " 
  studNum = 0
  prelim= 0
  midterm=0
  final=0
  subject= " "
  average = (this.prelim + this.midterm + this.final)/3
}

