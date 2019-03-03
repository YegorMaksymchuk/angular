import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuotePipe} from './quote.pipe';
import {BookRegistrationComponent} from './book-registration/book-registration.component';
import {FontStyleDirective} from './font-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe,
    BookRegistrationComponent,
    FontStyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
