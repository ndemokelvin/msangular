import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Goal } from '../../models/Goal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  goals: Goal[] = [
    {
      name: 'Win Champions as Arsenal',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
  ];

  constructor() {}

  @Output() clicked = new EventEmitter<boolean>();
  @Input('name') nameValue: string;

  ngOnInit(): void {}

  clickedFunction(isClicked: boolean) {
    this.clicked.emit(isClicked);
  }
}
