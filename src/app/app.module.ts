import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OddComponent } from './directives/odd/odd.component';
import { BasicHighlightDirective } from './basic-highlight/basic.highlight.directive';
import { BetterHighlightDirective } from './customDirectives/better-highlight.directive';
// import { CockpitComponent } from './cockpit/cockpit.component';
// import { ServerElementComponent } from './server-element/server-element.component';


@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
    // CockpitComponent,
    // ServerElementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
