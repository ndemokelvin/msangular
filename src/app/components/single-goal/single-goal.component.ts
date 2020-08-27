import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goal/goal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-goal',
  templateUrl: './single-goal.component.html',
  styleUrls: ['./single-goal.component.scss'],
})
export class SingleGoalComponent implements OnInit {
  goalForm: FormGroup;

  constructor(private goalService: GoalService, private fb: FormBuilder) {
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

  ngOnInit(): void {}
}
