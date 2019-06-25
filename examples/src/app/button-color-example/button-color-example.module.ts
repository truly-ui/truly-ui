import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonModule, IconsModule } from 'truly-ui';

import { ButtonColorExampleComponent } from './button-color-example.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ButtonColorExampleComponent
  ],
  imports: [
    ButtonModule,
    IconsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild( [
      {
        path: '', component: ButtonColorExampleComponent
      },
    ])
  ],
  exports: [
    ButtonColorExampleComponent
  ]
})
export class ButtonColorExampleModule {}
