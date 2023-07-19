import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ManageComponent } from './manage/manage.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VideoModule { }
