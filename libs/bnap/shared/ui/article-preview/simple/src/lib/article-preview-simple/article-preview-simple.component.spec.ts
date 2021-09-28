import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewSimpleComponent } from './article-preview-simple.component';

describe('ArticlePreviewSimpleComponent', () => {
  let component: ArticlePreviewSimpleComponent;
  let fixture: ComponentFixture<ArticlePreviewSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlePreviewSimpleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePreviewSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
