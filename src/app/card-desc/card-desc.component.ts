import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../card'

@Component({
  selector: 'app-card-desc',
  templateUrl: './card-desc.component.html',
  styleUrls: ['./card-desc.component.css']
})
export class CardDescComponent implements OnInit {
  @Input()
  card!: Card;

  @Output() isRead = new EventEmitter<boolean>()
  cardRead(read: boolean){
    this.isRead.emit(read)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
