import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {
  @Input('title') title: string;
  public isVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleContent() {
    this.isVisible = !this.isVisible;
  }
}
