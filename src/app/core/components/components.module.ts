import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@herbalife/shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [],
})
export class CoreComponentsModule {}
