import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservice } from './listcustomerservice/listcustomerservice';
import { Ex13ProductList } from './ex13-product-list/ex13-product-list';
import { Ex13ProductDetail } from './ex13-product-detail/ex13-product-detail';
import { Ex14Catalog } from './ex14-catalog/ex14-catalog';
import { Ex18 } from './ex18/ex18';
import { Ex18CustomerService } from './ex18-customer.service';
import { Ex19ServiceProduct } from './ex19-service-product/ex19-service-product';
import { Ex19ListProduct } from './ex19-list-product/ex19-list-product';
import { Ex19Product } from './ex19-product/ex19-product';

const routes: Routes = [
  { path:"gioi-thieu",component:About},
  {path:"sanpham1",component:Listproduct1},
  {path:"sanpham2",component:Listproduct2},
  {path:"sanpham3",component:Listproduct3},
  {path:"listcustomer",component:Listcustomer},
  {path:"listcustomerservice",component:Listcustomerservice},
  {path:"listcustomer/:id",component:Customerdetail},
  {path:"listcustomerservice/:id",component:Customerdetail},
  {path: 'ex18-group-customers', component: Ex18CustomerService},
  {path: '', redirectTo: '/product', pathMatch: 'full' },  // Redirect trang chủ
  {path: 'product', component: Ex19Product },
  {path: 'list-product', component: Ex19ListProduct },
  {path: 'service-product', component: Ex19ServiceProduct },
  {path:"**",component:Pagenotfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Export RoutingComponent để dùng trong app.module.ts
export const RoutingComponent = [
  Ex19Product,
  Ex19ListProduct,
  Ex19ServiceProduct
]