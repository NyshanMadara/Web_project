import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../product.service';
import { Location } from '@angular/common';
import { Product } from '../products';
import { Commentari } from 'src/app/components/comments';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {
    this.router.events.subscribe((value =>{
      this.getProduct();
    }));
  }

  ngOnInit() {
      this.getProduct();
  }

  getProduct() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.productService.getProduct(id).subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }

  
}
