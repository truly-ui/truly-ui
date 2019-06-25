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
      },
      {
        path: 'button-icons-example',
        loadChildren: './button-icons-example/button-icons-example.module#ButtonIconsExampleModule'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
