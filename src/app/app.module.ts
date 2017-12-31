import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app.router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { StockService } from './services/stock.service';
import { FakeStockService } from './services/fake.stock.service';

import { QuantityPipe } from './pipes/quantity.pipe';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { RecipeService } from './services/recipe.service';
import { FakeRecipeService } from './services/fake.recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { FakeShoppingListService } from './services/fake.shopping-list.service';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { PlanningComponent } from './components/planning/planning.component';
import { StockComponent } from './components/stock/stock.component';
import { PlanningService } from './services/planning.service';
import { FakePlanningService } from './services/fake.planning.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    QuantityPipe,
    ShoppingListComponent,
    RecipeComponent,
    PlanningComponent,
    StockComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    HttpClientModule,
    BrowserTransferStateModule,
    RoutingModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    {provide: StockService, useClass: FakeStockService},
    {provide: RecipeService, useClass: FakeRecipeService},
    {provide: ShoppingListService, useClass: FakeShoppingListService},
    {provide: PlanningService, useClass: FakePlanningService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
