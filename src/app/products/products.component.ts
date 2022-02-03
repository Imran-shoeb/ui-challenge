import { Component, OnInit } from '@angular/core';
import { SeedService } from '../services/seed.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any[] = [];
  constructor(private seedService: SeedService) { }

  ngOnInit(): void {

    this.productList = this.seedService.getAllProducts();
    console.log(this.productList);
  }

}
