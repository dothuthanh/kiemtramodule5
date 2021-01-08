import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
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
  bookForm: FormGroup = this.fb.group({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      this.bookService.getById(id).subscribe(result => {
        this.book = result;
        console.log(result);
      });
    });
    this.book = {
      id: 1,
      title: '',
      author: '',
      description: ''
    };
  }

  // tslint:disable-next-line:typedef
}
