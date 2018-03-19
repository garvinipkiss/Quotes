import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes = [
  new Quote(1,"Dr. Seuss","Don't cry because it's over, smile because it happened.", new Date(2017,11,15)),
  new Quote(2,"Oscar Wilde", "Be yourself; everyone else is already taken.", new Date(2018,1.1)),
  new Quote(3," Marilyn Monroe", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", new Date(2018,1,3)),
  new Quote(4,"Albert Einstein", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", new Date(2018,1.5)),
  new Quote(5,"Marcus Tullius Cicero", "A room without books is like a body without a soul.",new Date(2018,1.7)),
  new Quote(6,"Bernard M. Baruch", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", new Date(2018,1.9))
]


deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm('Are you sure you want to delete quote')
    if(toDelete){
      this.quotes.splice(index,1)
    }
  }
}

  addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id=quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)

  }
  constructor() { }

  ngOnInit() {
  }

}
