import { Injectable } from '@angular/core';
import { Goal } from 'src/app/models/Goal';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  private goals: Goal[] = [
    {
      id: 1,
      name: 'Win Champions as Arsenal',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      id: 2,
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      id: 3,
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      id: 4,
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      id: 5,
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      id: 6,
      name: 'ddd',
      description: 'we are going to win champions',
      showDescription: true,
      creator: 'novak',
    },
    {
      id: 7,
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

  addGoal = (goal: Goal): void => {
    this.goals.unshift(goal);
  };

  deleteGoal = (id: any) => {
    console.log(id);
    this.goals = this.goals.filter((goal) => goal.id !== id);
  };
}
