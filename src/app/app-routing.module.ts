import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListbookComponent} from './listbook/listbook.component';
import {CreatebookComponent} from './createbook/createbook.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListbookComponent,
  },
  {
    path: 'create',
    component: CreatebookComponent,
  },
  {
    path: 'edit/:id',
    component: EditBookComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteBookComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
