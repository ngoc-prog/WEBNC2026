import { Component } from '@angular/core';
import { Ex14CatalogService } from '../ex14-catalog.service';

@Component({
  selector: 'app-ex14-catalog',
  standalone: false,
  templateUrl: './ex14-catalog.html',
  styleUrl: './ex14-catalog.css',
})
export class Ex14Catalog {
  public categories: any;
  
  constructor(catalogService: Ex14CatalogService) {
    this.categories = catalogService.getCategories();
  }
}
