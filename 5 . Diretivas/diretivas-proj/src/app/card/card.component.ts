import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = "diretor"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push('add novo item')
  }
  
  remover(index: number){
    // this.produtos.pop()
    this.produtos.splice(index, 1)
  }

}
