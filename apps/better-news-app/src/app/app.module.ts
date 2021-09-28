import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

//TODO: For now home will house all the routes
const routes: Route[] = [
  {
    path: 'home',
    loadChildren: () =>
      import('@better-news/bnap/home/feature').then(
        (m) => m.BnapHomeFeatureModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('@better-news/bnap/category/feature').then(
        (m) => m.BnapCategoryFeatureModule
      ),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('@better-news/bnap/shared/ui/article').then(
        (m) => m.BnapSharedUiArticleModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
