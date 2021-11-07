import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    super(parentModule);
  }
}
 