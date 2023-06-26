import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example.component';
import { ParentComponent } from './components/parent/parent.component';

const routes = [
  {
    path: '',
    component: ExampleComponent,
    
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
