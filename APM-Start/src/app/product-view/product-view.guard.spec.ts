import { TestBed } from '@angular/core/testing';

import { ProductViewGuard } from './product-view.guard';

describe('ProductViewGuard', () => {
  let guard: ProductViewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductViewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
