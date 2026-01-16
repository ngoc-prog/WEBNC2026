import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13ProductDetail } from './ex13-product-detail';

describe('Ex13ProductDetail', () => {
  let component: Ex13ProductDetail;
  let fixture: ComponentFixture<Ex13ProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex13ProductDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex13ProductDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
