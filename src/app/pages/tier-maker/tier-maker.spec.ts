import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierMaker } from './tier-maker';

describe('TierMaker', () => {
  let component: TierMaker;
  let fixture: ComponentFixture<TierMaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierMaker],
    }).compileComponents();

    fixture = TestBed.createComponent(TierMaker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
