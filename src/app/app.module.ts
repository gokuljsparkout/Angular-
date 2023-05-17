import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OddComponent } from './directives/odd/odd.component';
// import { CockpitComponent } from './cockpit/cockpit.component';
// import { ServerElementComponent } from './server-element/server-element.component';


@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    // CockpitComponent,
    // ServerElementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
