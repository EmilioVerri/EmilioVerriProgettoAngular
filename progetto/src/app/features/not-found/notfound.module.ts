import { NgModule } from '@angular/core';
import { NotfoundRoutingModule } from './notfound-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    SharedModule,
    NotfoundRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
