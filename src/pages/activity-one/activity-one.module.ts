import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityOnePage } from './activity-one';

@NgModule({
  declarations: [
    ActivityOnePage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityOnePage),
  ],
})
export class ActivityOnePageModule {}
