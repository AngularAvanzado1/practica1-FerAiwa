import { async, TestBed } from '@angular/core/testing';
import { RegionQuizModule } from './region-quiz.module';

describe('RegionQuizModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RegionQuizModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RegionQuizModule).toBeDefined();
  });
});

