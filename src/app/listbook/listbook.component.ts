import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  listBook: IBook[] | undefined;
  constructor(private bookService: BookService) { }// dung de hung du lieu

  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook(): IBook[] | undefined {
    this.bookService.getAllBook().subscribe((data: any) => {
      this.listBook = data;
      console.log(this.listBook);
    });
    return this.listBook;
  }


}
