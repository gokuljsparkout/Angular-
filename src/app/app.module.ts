import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CounterComponent } from './Counter/counter/counter.component';
import { CounterControlComponent } from './Counter/counter-control/counter-control.component';
import { CounterViewComponent } from './Counter-App/counter-view/counter-view.component';
import { CounterControlsComponent } from './Counter-App/counter-controls/counter-controls.component';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    CounterComponent,
    CounterControlComponent,
    CounterViewComponent,
    CounterControlsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
