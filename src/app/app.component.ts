import {Component} from '@angular/core';
import {Book} from './book';
import {BookService} from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[];

  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }
}
