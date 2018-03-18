import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes = [
  new Quotes(1,"Garvin Berserk","If you cannot do great things, do small things in a great way.", new Date(2017,11,15)),
  new Quotes(2,"Liz", "opportunity comes once in a life time.", new Date(2018,1.1)),
  new Quotes(3," Garvin Berserk", "If opportunity doesn't knock, build a door.", new Date(2018,1,3)),
  new Quotes(4,"Snoop Dogg", "Happiness can exist only in acceptance.", new Date(2018,1.5)),
  new Quotes(5,"Marcus Garvey", "Black is Beautiful.",new Date(2018,1.7)),
  new Quotes(6,"Benjamin", "Whoever is happy will make others happy too.", new Date(2018,1.9))
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
