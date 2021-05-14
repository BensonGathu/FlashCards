import { Component, OnInit } from '@angular/core';
import { Card } from '../card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[] = [
    new Card(0,"Ghost","They the inviscibles",new Date(2021,2,17)),
    new Card(1,"Exploration","Still learning about life",new Date(2020,11,21)),
    new Card(2,"Data Mining","Hoping to make it in life through it",new Date(2022,1,2)),
    new Card(3,"Exfoliate","Skin care at its best",new Date(2021,8,23))
  ]

  toggleDetails(index: number){
    this.cards[index].showDescription =! this.cards[index].showDescription;
  }

  completeCard(isRead: boolean,index:number){
    if (isRead){
      var con = confirm(`Are you done with ${this.cards[index].name}?`)
      if (con){
      this.cards.splice(index,1)
    }
      
    }
  }
  addNewCard(card:any){
    let cardLength = this.cards.length;
    card.id = cardLength+1;
    card.date = new Date(card.date);
    this.cards.push(card)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
