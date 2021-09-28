import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ArticleComponent },
    ]),
  ],
  // {
  //   path: '',
  //   redirectTo: 'latest',
  //   pathMatch: 'full',
  // },
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
})
export class BnapSharedUiArticleModule {}
