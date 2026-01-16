import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ex13ProductService } from '../ex13-product.service';

@Component({
  selector: 'app-ex13-product-list',
  standalone: false,
  templateUrl: './ex13-product-list.html',
  styleUrl: './ex13-product-list.css',
})
export class Ex13ProductList {
  public products: any;
  
  constructor(pservice: Ex13ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }
  
  viewDetail(f: any) {
    this.router.navigate(['ex13-product-detail', f.ProductId]);
  }
}
