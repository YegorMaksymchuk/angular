import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  saveBook(book: Book): void {
    this.bookService.save(book);
  }
}
