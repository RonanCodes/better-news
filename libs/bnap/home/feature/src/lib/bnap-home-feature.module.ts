import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BnapSharedUiArticleModule } from '@better-news/bnap/shared/ui/article';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
    BnapSharedUiArticleModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class BnapHomeFeatureModule {}
