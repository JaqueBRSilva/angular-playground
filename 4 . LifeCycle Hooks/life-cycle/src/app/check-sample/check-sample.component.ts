import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  quantidade: number = 0

  constructor() { }

  somar(){
    this.quantidade += 1
  }

  subtrair(){
    this.quantidade -= 1
  }

  // ...Checked -> ...Content -> ...View

  // QUANDO O PRIMEIRO CONTEÚDO É INICIADO
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  // DEPOIS DA INICIALIZAÇÃO DA VIEW
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  
  // APÓS ALGUMA ALTERAÇÃO, VERIFICA O CONTEÚDO
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  // APÓS ALGUMA ALTERAÇÃO, VERIFICA A VIEW
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy')
  }

}
