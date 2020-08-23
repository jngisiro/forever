import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  isloading = false;
  product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.route.params.subscribe((params) => {
      this.isloading = true;
      console.log(params['id']);
      this.productService.getProduct(params['id']).subscribe((res: any) => {
        this.product = res.data.product;
        console.log(this.product);
        this.isloading = false;
      });
    });
  }

  ngOnInit(): void {}
}
