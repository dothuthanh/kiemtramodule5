import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  // // @ts-ignore
  // editUserForm: FormGroup;
  // @ts-ignore

  book: IBook;

  constructor(
    private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
  }

  // @ts-ignore
  bookForm: FormGroup;

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    });
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      this.bookService.getById(id).subscribe(result => {
        this.book = result;
        this.bookForm.setValue({
          title: result.title,
          author: result.author,
          description: result.description,
        });
      });
    });
  }
  // tslint:disable-next-line:typedef
  updateBook() {
    if (!this.bookForm.invalid){
      this.book.title = this.bookForm.value.title;
      this.book.author = this.bookForm.value.author;
      this.book.description = this.bookForm.value.description;
      this.bookService.updateBook(this.book).subscribe(() => {
        this.router.navigate(['']);
        alert('cap nhat thanh cong');
      }, error => alert('loi'));
    }
  }
}
