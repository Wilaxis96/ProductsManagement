import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public numberMask = createNumberMask({
    prefix: '$',
    allowDecimal: true,
    suffix: ''
  });

  public Product: Object = {
    ProductName: '',
    ProductDescription: '',
    CategoryId: '',
    Price: '',
    Stock: '',
    Status: true
  };

  public listCategories: any[] = [];

  constructor(private service: AppServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe((response) => {
      this.listCategories = response;
    }, (error) => {
      console.log(error);
    });
  }

  onSubmit() {
    const price = this.Product['Price'];
    this.Product['Price'] = price.replace('$', '');
    this.service.insertProduct(this.Product).subscribe((response) => {
      swal(
        'Created!',
        'Product Created.',
        'success'
      ).then(result => {
        this.router.navigate(['products']);
      });
    }, (error) => {
      console.log(error);
    });
  }

  isNumber(evt) {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
