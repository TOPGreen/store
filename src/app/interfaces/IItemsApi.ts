import {Observable} from 'rxjs';
import {Item} from './Item';
import {InjectionToken} from '@angular/core';

export const IItemsApiServiceToken = new InjectionToken('ICardsApiServiceToken');

export interface IItemsApiService {
  getAll(): Observable<Item[]>;

  add(entity: Item): Observable<void>;

  delete(id: number): Observable<void>;
}
