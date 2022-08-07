import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovielistComponent } from './movielist/movielist.component';
import { StarComponent } from './star/star.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    StarComponent,
    HomeComponent,
    PagenotfoundComponent,
    MoviedetailsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'movies',component:MovielistComponent},
      {path:'products',component:ProductsComponent},
      {path:'movies/:id',component:MoviedetailsComponent},  
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PagenotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
