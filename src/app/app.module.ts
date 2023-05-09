import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ForComponent } from './for/for.component';
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    DetailsComponent,
    ForComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
