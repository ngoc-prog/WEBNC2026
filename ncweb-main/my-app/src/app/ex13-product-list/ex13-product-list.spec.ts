import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13ProductList } from './ex13-product-list';

describe('Ex13ProductList', () => {
  let component: Ex13ProductList;
  let fixture: ComponentFixture<Ex13ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex13ProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex13ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
