import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer-service';

@Component({
  selector: 'app-listcustomerservice',
  standalone: false,
  templateUrl: './listcustomerservice.html',
  styleUrl: './listcustomerservice.css',
})
export class Listcustomerservice {
  customers:any
  constructor(private cs:CustomerService, private router:Router,private activateRouter:ActivatedRoute)
  {
    this.customers=this.cs.get_all_customers();
  }
  view_detail(id:any)
  {
    this.router.navigate(["listcustomerservice",id]);
  }
}
