import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketItemsComponent } from './bucket-items.component';

describe('BucketItemsComponent', () => {
  let component: BucketItemsComponent;
  let fixture: ComponentFixture<BucketItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
