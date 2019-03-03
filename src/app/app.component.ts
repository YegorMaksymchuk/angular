import {Component} from '@angular/core';
import {Book} from './book';
import {BookService} from './book.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$: Observable<Book[]>;
  booksNumber: number;

  constructor(private bookService: BookService,
              private http: HttpClient) {
    this.books$ = http.get<Book[]>('http://localhost:3000/books');
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }
}
