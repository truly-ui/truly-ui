import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonModule, IconsModule } from 'truly-ui';

import { ButtonIconsExampleComponent } from './button-icons-example.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ButtonIconsExampleComponent
  ],
  imports: [
    ButtonModule,
    IconsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild( [
      {
        path: '', component: ButtonIconsExampleComponent
      },
    ])
  ],
  exports: [
    ButtonIconsExampleComponent
  ]
})
export class ButtonIconsExampleModule {}
