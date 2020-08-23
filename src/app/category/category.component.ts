import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import productCategories from './../data/categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  products = [];
  loading = false;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loading = true;
      this.productService.getProductsByCategory(params['category']).subscribe(
        (res: any) => {
          this.loading = false;
          this.products = res.data.products.map((product) => {
            product.category = productCategories[product.category];
            return product;
          });
          console.log(res.data.products);
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    });
  }
}
