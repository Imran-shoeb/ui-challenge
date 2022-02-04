import { Component, OnInit } from '@angular/core';
import { SeedService } from '../services/seed.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  //for product list
  productList: any[] = [];

  //instantiating seedService
  constructor(private seedService: SeedService) {}

  ngOnInit(): void {
    //this function is called for sort data whenever the app loaded
    this.sortingItemsDescending();
  }

  //for sorting the data descending order acoording to cote count
  sortingItemsDescending() {
    this.productList = this.seedService.getAllProducts();
    this.productList.sort(function (a, b) {
      return b.votes - a.votes;
    });
  }

  //arrow button clicked and this function invoked
  increment(id: any) {
    for (var i in this.productList) {
      if (id === this.productList[i].id) {

        //increamenting the vote count for every data
        this.productList[i].votes++;
        this.sortingItemsDescending();
        break;
      }
    }
  }
}
