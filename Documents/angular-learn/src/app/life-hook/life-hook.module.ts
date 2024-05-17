import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeHookRoutingModule } from './life-hook-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LifeHookRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LifeHookModule {}
