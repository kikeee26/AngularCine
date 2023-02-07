import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  contenidoMarkDown = '';
  constructor() {}

  @Output()
  changeMarkDown: EventEmitter<string> = new EventEmitter<string>();

  inputTextArea(texto: string){
    console.log(texto);
    this.contenidoMarkDown = texto;
    this.changeMarkDown.emit(texto);
  }
}
