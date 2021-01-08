import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbookComponent } from './listbook/listbook.component';
import {HttpClientModule} from '@angular/common/http';
import { CreatebookComponent } from './createbook/createbook.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent,
    CreatebookComponent,
    EditBookComponent,
    DeleteBookComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
