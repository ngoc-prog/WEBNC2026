import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ex13ProductService } from '../ex13-product.service';

@Component({
  selector: 'app-ex13-product-detail',
  standalone: false,
  templateUrl: './ex13-product-detail.html',
  styleUrl: './ex13-product-detail.css',
})
export class Ex13ProductDetail {
  selectedProduct: any;
  
  constructor(private activateRoute: ActivatedRoute, private _fs: Ex13ProductService, private router: Router) {
    activateRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id');
        
        if (id != null) {
          this.selectedProduct = _fs.getProductDetail(id);
        }
      }
    )
  }
  
  goBack() {
    this.router.navigate(['']);
  }
}
