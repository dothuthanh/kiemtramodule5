import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../book.service';
import {IBook} from '../ibook';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  // @ts-ignore
  newBookForm: FormGroup;
  constructor(
    private router: Router,
    private user: BookService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.newBookForm = this.fb.group( {
      title: [null],
      author: [null],
      description: [null],
    });
  }
  // tslint:disable-next-line:typedef
  creatNewBook() {
    const newU: IBook = this.newBookForm.value;
    this.user.create(newU).subscribe( () => {
      this.router.navigate(['']);
      alert('tao moi thanh cong');
    });
  }

}
