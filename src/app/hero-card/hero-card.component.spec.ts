import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardComponent } from './hero-card.component';

describe('CatCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
