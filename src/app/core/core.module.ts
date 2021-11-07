import { NgModule } from '@angular/core';
import { CoreComponentsModule } from './components/components.module';
import { HelpersModule } from './providers/helpers/helpers.module';

@NgModule({
  imports: [HelpersModule],
  exports: [CoreComponentsModule],
  providers: [],
})
export class CoreModule {}
