import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combos } from './combos';

describe('Combos', () => {
  let component: Combos;
  let fixture: ComponentFixture<Combos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Combos],
    }).compileComponents();

    fixture = TestBed.createComponent(Combos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
