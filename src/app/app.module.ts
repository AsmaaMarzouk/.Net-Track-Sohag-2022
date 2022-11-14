import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
// Day5
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { UsdToEgpPipe } from './Pipes/usd-to-egp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    OrderParentComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserRegisterComponent,
    BorderBoxDirective,
    UsdToEgpPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
