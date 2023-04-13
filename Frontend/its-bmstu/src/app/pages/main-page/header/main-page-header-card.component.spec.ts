import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MainPageHeaderCardComponent} from './main-page-header-card.component';

describe('MainPageComponent', () => {
  let component: MainPageHeaderCardComponent;
  let fixture: ComponentFixture<MainPageHeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageHeaderCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainPageHeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
