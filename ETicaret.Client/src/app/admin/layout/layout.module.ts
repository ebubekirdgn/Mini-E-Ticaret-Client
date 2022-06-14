import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';

/*
Bir modul baska modulu içine alacaksa import etmesi gerekir.
Alttakiler üst module dahil edilir yani
Layoutu adminin içine girip importa ekleyeceğiz . admini de app module ye yani bir üst modulun içerisine
import etmemiz gerekecek.
Declare işlemi ise kendine en yakın module kendini declare eder.
*/

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule

  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
