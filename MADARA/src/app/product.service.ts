import { Injectable } from '@angular/core';////////////
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from './components/shopping-cart/product-list/products';
import { Category } from './components/shopping-cart/product-list/category';
import { New } from './components/news';
import { Commentari } from './components/comments';

export class LoginResponse {
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}/`);
  }
  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }
  getProductsByCategory(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/products/`)
  }
  getNews(): Observable<New[]> {
    return this.http.get<New[]>(`${this.BASE_URL}/api/news/`);
  }
  getNew(id: number): Observable<New> {
    return this.http.get<New>(`${this.BASE_URL}/api/news/${id}/`);
  }
  
  deleteNew(id): Observable<New> {
    return this.http.delete<New>(`${this.BASE_URL}/api/news/${id}/`);
  }

  create(news): Observable<New> {
    return this.http.post<New>(this.BASE_URL + '/api/news/', news, this.headers)
  }
  update(news): Observable<New> {
    return this.http.put<New>(this.BASE_URL + '/api/news/'+ news.id +'/' , news, this.headers)
  }
  getCommentsByCategory(category: number): Observable<Commentari[]>{
    return this.http.get<Commentari[]>(`${this.BASE_URL}/api/categories/${category}/comments/`)
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
}
