import { Component, OnInit } from '@angular/core';
import { SeedService } from '../services/seed.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  constructor(private seedService: SeedService) {}

  ngOnInit(): void {
    this.sortingItemsDescending();
  }

  sortingItemsDescending() {
    this.productList = this.seedService.getAllProducts();
    this.productList.sort(function (a, b) {
      return b.votes - a.votes;
    });
  }

  increment(id: any) {
    for (var i in this.productList) {
      if (id === this.productList[i].id) {
        this.productList[i].votes++;
        this.sortingItemsDescending();
        break;
      }
    }
  }
}
