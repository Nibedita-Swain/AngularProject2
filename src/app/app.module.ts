import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
