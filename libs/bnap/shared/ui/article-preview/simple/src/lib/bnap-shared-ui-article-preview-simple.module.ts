import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewSimpleComponent } from './article-preview-simple/article-preview-simple.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ArticlePreviewSimpleComponent],
  exports: [ArticlePreviewSimpleComponent],
})
export class BnapSharedUiArticlePreviewSimpleModule {}
