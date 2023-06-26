import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [ParentComponent,ChildComponent],
  imports: [HttpClientModule, ExampleRoutingModule],
  providers: [],
  bootstrap: [],
})
export class ExampleModule {}
