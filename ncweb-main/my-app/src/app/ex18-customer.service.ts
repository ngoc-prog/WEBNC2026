import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Ex18CustomerService {
  constructor(private http: HttpClient) { }

  getGroupCustomers(): Observable<any> {
    // Thử load từ file JSON trước
    return this.http.get('assets/dataset/customers.json');
  }

  // Fallback: dữ liệu hardcode nếu file không tải được
  getGroupCustomersLocal(): Observable<any> {
    const data = [
      {
        "CustomerTypeId": 1,
        "CustomerTypeName": "VIP",
        "Customers": [
          {
            "Id": "Cus123",
            "Name": "Obama",
            "Email": "obama@gmail.com",
            "Age": 67
          },
          {
            "Id": "Cus456",
            "Name": "Kim jong Un",
            "Email": "unun@gmail.com",
            "Age": 38
          }
        ]
      },
      {
        "CustomerTypeId": 2,
        "CustomerTypeName": "Normal",
        "Customers": [
          {
            "Id": "Cus000",
            "Name": "Hồ Cẩm Đào",
            "Email": "hodao@gmail.com",
            "Age": 16
          },
          {
            "Id": "Cus111",
            "Name": "Tap Can Binh",
            "Email": "binhbinh@gmail.com",
            "Age": 67
          }
        ]
      }
    ];
    return of(data);
  }
}
