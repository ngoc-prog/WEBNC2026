import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ex14CatalogService {
  datas = [
    {
      "Cateid": "cate1", "CateName": "nuoc ngot",
      "Products": [
        {"ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "assets/images/coca.jpg"},
        {"ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "assets/images/pepsi.jpg"},
        {"ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "assets/images/sting.jpg"}
      ]
    },
    {
      "Cateid": "cate2", "CateName": "Bia",
      "Products": [
        {"ProductId": "p4", "ProductName": "Heineken", "Price": 500, "Image": "assets/images/heineken.png"},
        {"ProductId": "p5", "ProductName": "333", "Price": 400, "Image": "assets/images/333.png"},
        {"ProductId": "p6", "ProductName": "Sai Gon", "Price": 600, "Image": "assets/images/saigon.png"}
      ]
    }
  ]
  
  constructor() { }
  
  getCategories() {
    return this.datas;
  }
}
