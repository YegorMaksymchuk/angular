import {Component} from '@angular/core';
import {Book} from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[];

  constructor() {
    this.books = [
      {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        description: 'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s\n' +
          '      more reliable, readable, and maintainable',
        pages: 2008,
        year: 172
      },
      {
        title: 'Mastering TypeScript',
        author: 'Nathan Rozentals',
        description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading\n' +
          '      JavaScript frameworks',
        pages: 2015,
        year: 364
      },
      {
        title: 'Switching to Angular 2',
        author: 'Minko Gechev',
        description: 'Start using TypeScript to supercharge your Angular 2 applications',
        pages: 2016,
        year: 254
      }
    ];
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }
}
