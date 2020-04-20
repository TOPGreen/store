import {Injectable} from '@angular/core';
import {Item} from '../../interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  private items = [];

  get getItems() {
    return this.items;
  }

  private totalSum = 0;

  clearBucket() {
    this.items = [];
  }

  setBucket(items: Item[]) {
    this.items = items;
  }

  get getTotalSum() {
    return this.totalSum;
  }

  setTotalSum(totalSum: number) {
    this.totalSum = totalSum;
  }

  constructor() {
  }

  updateSum() {
    const totalSum = this.getItems.reduce((sum, cur) => sum + cur.price * cur.count, 0);
    this.setTotalSum(totalSum);
  }

  addItem(item: Item) {
    this.items.push({...item, count: 1});
    this.updateSum();
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.updateSum();
  }

}
