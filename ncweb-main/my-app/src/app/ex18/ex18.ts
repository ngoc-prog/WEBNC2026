import { Component, OnInit } from '@angular/core';
import { Ex18Service } from '../ex18-service';
import { Ex18CustomerService } from '../ex18-customer.service';


@Component({
  selector: 'app-ex18',
  standalone: false,
  templateUrl: './ex18.html',
  styleUrl: './ex18.css',
})
export class Ex18 implements OnInit {
   public customerGroups: any[] = [];

  constructor(private customerService: Ex18CustomerService) { }

  ngOnInit(): void {
    this.customerService.getGroupCustomers().subscribe(
      (dataset) => {
        console.log('Customers loaded:', dataset);
        this.customerGroups = dataset;
      },
      (error) => {
        console.error('Error loading customers, using local data:', error);
        // Nếu tải từ file lỗi, dùng dữ liệu local
        this.customerService.getGroupCustomersLocal().subscribe(
          (dataset) => {
            console.log('Using local data:', dataset);
            this.customerGroups = dataset;
          }
        );
      }
    );
  }
}
