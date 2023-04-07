import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name?: string;
  @Output() eventName = new EventEmitter<string>();
  @Output() childData = new EventEmitter<string>();
  @Input() newChild?: string;
  constructor() { }
 

  ngOnInit(): void {
    this.eventName.emit('VanithaSri');
    this.childData.emit('Sujitha');
  }

}
