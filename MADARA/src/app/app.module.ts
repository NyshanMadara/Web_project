import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CategoryComponent } from './components/shopping-cart/category/category.component';
import { ProductDetailComponent } from './components/shopping-cart/product-list/product-detail/product-detail.component';
import { HoverDirective } from './hover.directive';
import { SearchPipe } from './search.pipe';
import { NewsComponent } from './components/news/news.component';
import { PrivateClientsComponent } from './components/private-clients/private-clients.component';
import { SmallBusinessComponent } from './components/small-business/small-business.component';
import { LargeCompaniesComponent } from './components/large-companies/large-companies.component';
import { BusinessCentersComponent } from './components/business-centers/business-centers.component';
import { FormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProductListComponent,
    CategoryComponent,
    ProductDetailComponent,
    HoverDirective,
    SearchPipe,
    NewsComponent,
    PrivateClientsComponent,
    SmallBusinessComponent,
    LargeCompaniesComponent,
    BusinessCentersComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
