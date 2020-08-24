import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HeroComponent } from './hero/hero.component';
import { SummarizePipe } from './summarize.pipe';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { LoadingComponent } from './loading/loading.component';
import { CategoryComponent } from './category/category.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeroComponent,
    SummarizePipe,
    IndexComponent,
    DetailsComponent,
    LoadingComponent,
    CategoryComponent,
    SubscribeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
