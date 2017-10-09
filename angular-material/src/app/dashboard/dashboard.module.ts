import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
