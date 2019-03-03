import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private bookService: BookService,
              formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: '',
      description: '',
      author: '',
      pages: '',
      year: ''
    });
  }

  ngOnInit() {
  }

  saveBook(): void {
    this.bookService.save(this.bookForm.value as Book);
    this.bookForm.reset();
  }
}
