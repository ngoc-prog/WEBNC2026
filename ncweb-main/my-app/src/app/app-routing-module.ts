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

const routes: Routes = [
  { path:"gioi-thieu",component:About},
  {path:"sanpham1",component:Listproduct1},
  {path:"sanpham2",component:Listproduct2},
  {path:"sanpham3",component:Listproduct3},
  {path:"listcustomer",component:Listcustomer},
  {path:"listcustomerservice",component:Listcustomerservice},
  {path:"listcustomer/:id",component:Customerdetail},
  {path:"listcustomerservice/:id",component:Customerdetail},
  {path: '', component: Ex14Catalog},
  {path: 'ex14-catalog/:id', component: Ex14Catalog},
  {path:"**",component:Pagenotfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
