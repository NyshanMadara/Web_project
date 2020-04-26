import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './components/shopping-cart/product-list/product-list.component';
import {CategoryComponent} from './components/shopping-cart/category/category.component';
import {ProductDetailComponent} from './components/shopping-cart/product-list/product-detail/product-detail.component';
import { NewsComponent } from './components/news/news.component';
import { PrivateClientsComponent } from './components/private-clients/private-clients.component';
import { SmallBusinessComponent } from './components/small-business/small-business.component';
import { LargeCompaniesComponent } from './components/large-companies/large-companies.component';
import { BusinessCentersComponent } from './components/business-centers/business-centers.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
const routes: Routes = [

  { path: '', redirectTo: 'categories', pathMatch: 'full'},
  { path: 'categories', component:CategoryComponent},
  { path: 'signup', component: SignupComponent},
  {path: 'categories/:id/products', component:ProductListComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'news', component: NewsComponent},
  { path: 'private-clients', component: PrivateClientsComponent},
  { path: 'small-business', component: SmallBusinessComponent},
  { path: 'large-companies', component: LargeCompaniesComponent},
  { path: 'business-centers', component: BusinessCentersComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'admin', component: AdminPanelComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
