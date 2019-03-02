import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: any;

  constructor() {
    setTimeout(() => {
      this.book = {
        title: 'Angular 8',
        pages: 300,
        year: 2019,
        author: 'Hevery'
      };
    }, 500);

  }
}
