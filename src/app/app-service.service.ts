import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

const GlobalConfig = 'http://localhost:55880/api/v1/';

@Injectable()
export class AppServiceService {

  constructor(private http: Http) { }

  getAllProducts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http
      .get(
      GlobalConfig + 'products',
      { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  getAllCategories() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http
      .get(
      GlobalConfig + 'categories',
      { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  insertProduct(Product) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http
      .post(
        GlobalConfig + '/products',
      Product,
      { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  deleteProduct(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http
      .delete(
        GlobalConfig + '/products/' + id,
      { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  getProductById(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http
      .get(
        GlobalConfig + '/products/' + id,
      { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

  updateProduct(Product) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http
      .put(
        GlobalConfig + '/products/' + Product.ID,
      Product,
      { headers }
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

}

