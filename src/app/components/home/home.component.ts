import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Goal } from '../../models/Goal';
import { GoalService } from '../../services/goal/goal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  goals: Goal[] = [];
  constructor(private goalService: GoalService) {
    this.goals = goalService.getGoalsList;
  }

  @Output() clicked = new EventEmitter<boolean>();
  @Input('name') nameValue: string;

  clickedFunction(isClicked: boolean) {
    this.clicked.emit(isClicked);
  }
}
