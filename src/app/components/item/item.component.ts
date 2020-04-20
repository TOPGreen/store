import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../interfaces/Item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  @Output()
  add = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(this.item);
  }
}
