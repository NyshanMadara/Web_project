import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  news = []
  edit: boolean = false
  newModel = {
    id: 0,
    image: '',
    description: '',
  
  }
  constructor(private productService: ProductService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.productService.getNews().subscribe(news => {
      this.news = news
    })
  }

  getNews() {
    this.productService.getNews().subscribe(news => this.news = news);
}
  onDelete(id) {
    this.productService.deleteNew(id).subscribe()
  }

  onCreate(): void {
    this.productService.create(this.newModel).subscribe()
  }

  onEditStart(id) {
    this.productService.getNew(id).subscribe(data => {
      this.newModel.description = data.description
      this.newModel.id = data.id
      this.newModel.image = data.image
    })
    this.edit = true
  }

  onEdit() {
    this.productService.update(this.newModel).subscribe()
  }
  goBack(): void {
    this.location.back();
  }
}
