import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { TodoListComponent } from './Todo/todo-list/todo-list.component';
import { TodoEditComponent } from './Todo/todo-edit/todo-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    TodoListComponent,
    TodoEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
