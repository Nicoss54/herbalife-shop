import { NgModule } from '@angular/core';
import { CoreComponentsModule } from './components/components.module';
import { HelpersModule } from './providers/helpers/helpers.module';
import { ServiceModule } from './providers/service/service.module';

@NgModule({
  imports: [HelpersModule, ServiceModule, CoreComponentsModule],
  exports: [CoreComponentsModule],
  providers: [],
})
export class CoreModule {}
