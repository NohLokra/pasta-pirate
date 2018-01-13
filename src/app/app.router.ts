import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about.component';
import { StockPageComponent } from './pages/stock/stock.component';
import { RecipeListPageComponent } from './pages/recipe-list/recipe-list.component';
import { RecipePageComponent } from './pages/recipe/recipe.component';
import { PlanningPageComponent } from './pages/planning/planning.component';
import { LoginPageComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'stock', component: StockPageComponent },
  { path: 'recipes', component: RecipeListPageComponent },
  { path: 'recipe/:id', component: RecipePageComponent },
  { path: 'planning', component: PlanningPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
