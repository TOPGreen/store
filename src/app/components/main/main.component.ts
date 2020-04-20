import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../../services/items/items.service';
import {Item} from '../../interfaces/Item';
import {BucketService} from '../../services/bucket/bucket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  get items() {
    return this.itemsService.getItems;
  }

  constructor(private itemsService: ItemsService, private bucketService: BucketService) {
  }

  async ngOnInit() {
    this.itemsService.initialize();
  }

  onItemAdd(item: Item) {
    this.bucketService.addItem(item);
  }

}
