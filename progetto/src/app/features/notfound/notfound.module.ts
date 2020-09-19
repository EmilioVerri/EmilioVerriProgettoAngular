import { NgModule } from '@angular/core';
import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from './notfound.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    SharedModule,
    NotfoundRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
