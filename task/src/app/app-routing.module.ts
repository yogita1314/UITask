import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningplanComponent } from './learningplan/learningplan.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo:'dashboard',pathMatch: 'full'},
  { path: 'dashboard',component:DashboardComponent},  
  { path: 'classes',component:ClassesComponent},
  { path: 'resources',component:ResourcesComponent},
  { path: 'learningplan',component:LearningplanComponent},  
  { path: 'chat',component:ChatComponent},
  { path: 'settings',component:SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
