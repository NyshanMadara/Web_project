import { Component, OnInit, Input } from '@angular/core';
import { New } from '../news';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: New[];

 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getNews();
  }
  getNews() {
    this.productService.getNews().subscribe(news => this.news = news);
}
}
