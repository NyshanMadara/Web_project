import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../.../../../../product.service';
import { Product } from './products';
import { Commentari } from '../../comments';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products: Product[];
  comments: Commentari[];
  searchStr = ''
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    
  ) {
    this.router.events.subscribe((value =>{
      this.getProducts();
    }));
  }

   ngOnInit() {
    this.getProducts();
  }
  getProducts() {
      this.productService.getProducts().subscribe(products => this.products = products);
  }
  getComments(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getCommentsByCategory(id).subscribe(comments => this.comments = comments);
  }
  


}

