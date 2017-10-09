import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatCardModule, MatInputModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
