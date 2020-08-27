import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingleGoalComponent } from './components/single-goal/single-goal.component';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'goals',
    pathMatch: 'full',
  },
  {
    path: 'goals',
    component: HomeComponent,
  },
  {
    path: 'add-goal',
    component: SingleGoalComponent,
  },
  {
    path: 'goals/:id',
    component: GoalDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
