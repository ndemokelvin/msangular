import { Injectable } from '@angular/core';
import { Goal } from 'src/app/models/Goal';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  private goals: Goal[] = [
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

  get getGoalsList() {
    return this.goals;
  }
}
