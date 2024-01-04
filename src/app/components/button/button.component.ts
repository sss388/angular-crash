import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Input() text = "black";
  @Input() color = "button";
  @Output() btnClick = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  onClick() {
    this.btnClick.emit();
  }
}
