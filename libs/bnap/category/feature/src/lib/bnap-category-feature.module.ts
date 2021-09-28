import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
// import { BnapSharedUiArticleModule } from '@better-news/bnap/shared/ui/article';
import { BnapSharedUiArticlePreviewSimpleModule } from '@better-news/bnap-shared-ui-article-preview-simple';
// import { BnapSharedUiArticlePreviewSimpleModule } from '@better-news/bnap/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':category', pathMatch: 'full', component: CategoryComponent },
      {
        path: '',
        redirectTo: 'latest',
        pathMatch: 'full',
      },
    ]),
    // BnapSharedUiArticleModule,
    BnapSharedUiArticlePreviewSimpleModule,
    RouterModule,
  ],
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
})
export class BnapCategoryFeatureModule {}
