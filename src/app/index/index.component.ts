import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  products = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (res: any) => {
        this.products = res.data.products;
        console.log(this.products);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
