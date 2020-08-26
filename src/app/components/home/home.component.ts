import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Goal } from '../../models/Goal';
import { GoalService } from '../../services/goal/goal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  goals: Goal[] = [];
  goalForm: FormGroup;

  constructor(private goalService: GoalService, private fb: FormBuilder) {
    this.goals = goalService.getGoalsList;

    this.goalForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      creator: ['', Validators.required],
    });
  }

  onGoalSubmit = () => {
    // const { name, description, creator } = this.goalForm.value;
    this.goalService.addGoal({
      ...this.goalForm.value,
      showDescription: true,
      id: Date.now().toString(),
    });
  };

  deleteGoal(id) {
    this.goalService.deleteGoal(id);
  }

  @Output() clicked = new EventEmitter<boolean>();
  @Input('name') nameValue: string;

  clickedFunction(isClicked: boolean) {
    this.clicked.emit(isClicked);
  }
}
