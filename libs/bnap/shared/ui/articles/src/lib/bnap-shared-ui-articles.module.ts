import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ArticlesComponent
  ],
  exports: [
    ArticlesComponent
  ],
})
export class BnapSharedUiArticlesModule {}
