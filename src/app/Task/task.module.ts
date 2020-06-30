import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { TaskComponent } from './task.coomponent';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TaskComponent]
})
export class TaskModule { }
