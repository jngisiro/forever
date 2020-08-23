import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import productCategories from './../data/categories';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  products = [];
  loading = false;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.loading = true;
    this.productService.getProducts().subscribe(
      (res: any) => {
        this.products = res.data.products.map((product) => {
          product.category = productCategories[product.category];
          return product;
        });
        this.loading = false;

        // console.log(this.products);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
