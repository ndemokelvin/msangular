import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Goal } from '../../models/Goal';
import { GoalService } from '../../services/goal/goal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  goals: Goal[] = [];
  goalForm: FormGroup;

  constructor(
    private goalService: GoalService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.goals = goalService.getGoalsList;
  }

  deleteGoal(id) {
    this.goalService.deleteGoal(id);
    this.goals = this.goalService.getGoalsList;
  }

  @Output() clicked = new EventEmitter<boolean>();
  @Input('name') nameValue: string;

  clickedFunction(isClicked: boolean) {
    this.clicked.emit(isClicked);
  }

  viewGoal(id: any) {
    this.router.navigate(['goals', id]);
  }
}
