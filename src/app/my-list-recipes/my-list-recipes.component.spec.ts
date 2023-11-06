import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListRecipesComponent } from './my-list-recipes.component';

describe('MyListRecipesComponent', () => {
  let component: MyListRecipesComponent;
  let fixture: ComponentFixture<MyListRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyListRecipesComponent]
    });
    fixture = TestBed.createComponent(MyListRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
