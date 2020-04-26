import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
      
  ) {
    this.router.events.subscribe((value =>{
         
    }));
  }

  ngOnInit() {
     
  }

}
