import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcRecipesComponent } from './searc-recipes.component';

describe('SearcRecipesComponent', () => {
  let component: SearcRecipesComponent;
  let fixture: ComponentFixture<SearcRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
