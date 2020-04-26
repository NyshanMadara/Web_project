import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    products: any;
    categories: any;
    constructor(
      private router: Router,
      private productService: ProductService,
    ) {
      this.router.events.subscribe((value => {
        this.getCategories();
    }));
    }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }
}
