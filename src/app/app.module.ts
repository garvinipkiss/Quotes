import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quotes-details/quotes-details.component';
import { QuoteFormComponent } from './quotes-form/quotes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
