import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {


  @Input()
  placeHolderTextarea: string = 'Texto';

  @Input()
  contenidoMarkDown= '';

  @Output()
  changeMarkDown: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  inputTextArea(texto: string){
    console.log(texto);
    this.contenidoMarkDown = texto;
    this.changeMarkDown.emit(texto);
  }
}
