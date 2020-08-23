import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(
      'https:forever-products.herokuapp.com/api/v1/products',
      { responseType: 'json' }
    );
  }

  getProduct(id) {
    return this.http.get(
      'https:forever-products.herokuapp.com/api/v1/products/' + id,
      { responseType: 'json' }
    );
  }
}
