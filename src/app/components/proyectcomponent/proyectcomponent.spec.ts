import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyectcomponent } from './proyectcomponent';

describe('Proyectcomponent', () => {
  let component: Proyectcomponent;
  let fixture: ComponentFixture<Proyectcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyectcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyectcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
