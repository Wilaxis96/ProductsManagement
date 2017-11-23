import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import swal from 'sweetalert2';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public numberMask = createNumberMask({
    prefix: '$',
    allowDecimal: true,
    suffix: ''
  });

  public Product: Object = {
    ID: '',
    ProductName: '',
    ProductDescription: '',
    CategoryId: '',
    Price: '',
    Stock: '',
    Status: ''
  };

  id: number;
  private sub: any;
  public listCategories: any[] = [];

  constructor(private service: AppServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.service.getProductById(this.id).subscribe((response) => {
      this.Product = response;
    }, (error) => {
      console.log(error);
    });
    this.service.getAllCategories().subscribe((response) => {
      this.listCategories = response;
    }, (error) => {
      console.log(error);
    });
  }

  onSubmit() {
    
    const price = this.Product['Price'];
    this.Product['Price'] = price[0] === '$' ? price.replace('$', '') : price ;
    this.service.updateProduct(this.Product).subscribe((response) => {
      swal(
        'Updated!',
        'Product Updated.',
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
