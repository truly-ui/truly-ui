import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'button-color-example', pathMatch: 'full'
      },
      {
        path: 'button-color-example',
        loadChildren: './button-color-example/button-color-example.module#ButtonColorExampleModule'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
