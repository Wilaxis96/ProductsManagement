import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public numberMask = createNumberMask({
    prefix: '',
    allowDecimal: true,
    suffix: ' $'
  });

  public listProducts: any[] = [];

  constructor(private serviceApp: AppServiceService, private router: Router) { }

  ngOnInit() {
    this.serviceApp.getAllProducts().subscribe((response) => {
      console.log(response);
      this.listProducts = response;
    }, (error) => {
      console.log(error);
    });
  }

  onDeleteProduct(product) {
    swal({
      title: 'Produc Remove',
      text: 'Are you sure to remove the product?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.serviceApp.deleteProduct(product.ID).subscribe((response) => {
          this.serviceApp.getAllProducts().subscribe((response) => {
            this.listProducts = response;
          }, (error) => {
            console.log(error);
          });
          swal(
            'Deleted!',
            'Product has been deleted.',
            'success'
          )
        }, (error) => {
          console.log(error);
          swal(
            'Error!',
            'Error removing the product.',
            'error'
          )
        });
      }
    });
  }

  onUpdateProduct(product) {
    this.router.navigate(['products/update-product', product.ID]);
  }
}
