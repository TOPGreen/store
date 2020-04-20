import {Inject, Injectable} from '@angular/core';
import {Item} from '../../interfaces/Item';
import {IItemsApiService, IItemsApiServiceToken} from '../../interfaces/IItemsApi';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[] = [];

  get getItems(): Item[] {
    return this.items;
  }

  constructor(@Inject(IItemsApiServiceToken)
              private itemsApiService: IItemsApiService) {
  }

  initialize() {
    this.itemsApiService.getAll().subscribe(data => {
      this.setItems(data);
    });
  }

  setItems(items: Item[]) {
    this.items = items;
  }

}
