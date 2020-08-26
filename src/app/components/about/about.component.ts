import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goal/goal.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private goalService: GoalService) {}

  ngOnInit(): void {}
}
