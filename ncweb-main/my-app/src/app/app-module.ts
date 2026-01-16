import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Ex3 } from './ex3/ex3';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Tdgpa } from './tdgpa/tdgpa';
import { Ptb2 } from './ptb2/ptb2';
import { Learndirective } from './learndirective/learndirective';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Customer } from './customer/customer';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Ex18 } from './ex18/ex18';
import { Ex10 } from './ex10/ex10';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservice } from './listcustomerservice/listcustomerservice';
import { Ex13ProductList } from './ex13-product-list/ex13-product-list';
import { Ex13ProductDetail } from './ex13-product-detail/ex13-product-detail';
import { Ex14Catalog } from './ex14-catalog/ex14-catalog';


@NgModule({
  declarations: [
    App,
    About,
    Contact,
    Ex3,
    Mybinding,
    Ptb1,
    Tdgpa,
    Ptb2,
    Learndirective,
    Listproduct1,
    Listproduct2,
    Customer,
    Listproduct3,
    Ex18,
    Pagenotfound,
    Listcustomer,
    Customerdetail,
    Listcustomerservice,
    Ex13ProductList,
    Ex13ProductDetail,
    Ex14Catalog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ex10
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
