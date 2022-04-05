import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CarouselListComponent } from './carousel-list/carousel-list.component';
import { TrendingListComponent } from './trending-list/trending-list.component';
import { DateCountPipe } from './Pipes/date-count.pipe';
import { SearchService } from './Services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
// import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    CarouselComponent,
    RecipesComponent,
    CarouselListComponent,
    TrendingListComponent,
    DateCountPipe,
    NavBarComponent,
    FooterComponent,
    // HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
