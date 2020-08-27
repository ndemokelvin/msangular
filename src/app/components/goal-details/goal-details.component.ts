import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal/goal.service';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss'],
})
export class GoalDetailsComponent implements OnInit {
  goalId: any = null;
  goal: Goal;

  constructor(
    private route: ActivatedRoute,
    private goalService: GoalService
  ) {}

  ngOnInit(): void {
    this.goalId = this.route.snapshot.params['id'];
    console.log(this.goalId);
    this.goal = this.goalService.getGoal(this.goalId);
    console.log(this.goal);
  }
}
