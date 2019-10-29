import { async, TestBed } from '@angular/core/testing';
import { RegionsStoreModule } from './regions-store.module';

describe('RegionsStoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RegionsStoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RegionsStoreModule).toBeDefined();
  });
});
