import {Component, OnInit} from '@angular/core';
import {BucketService} from '../../services/bucket/bucket.service';
import {CurrenciesService} from '../../services/currencies/currencies.service';

@Component({
  selector: 'app-bucket-items',
  templateUrl: './bucket-items.component.html',
  styleUrls: ['./bucket-items.component.css']
})
export class BucketItemsComponent implements OnInit {

  get totalSum() {
    return this.bucketService.getTotalSum * this.currenciesService.getRate;
  }

  get currencyCode() {
    return this.currenciesService.getCurrencyCode;
  }

  get items() {
    return this.bucketService.getItems;
  }

  constructor(private bucketService: BucketService, private currenciesService: CurrenciesService) {
  }

  ngOnInit(): void {
    this.bucketService.updateSum();
  }

  onDeleteItem(index: number) {
    this.bucketService.deleteItem(index);
  }

  onCountInput(event) {
    if (event.target.value < 0) {
      event.target.value = -event.target.value;
    }
  }

  onCountChange(event) {
    if (!event.target.value) {
      event.target.value = 0;
    }
    this.bucketService.updateSum();
  }

}
