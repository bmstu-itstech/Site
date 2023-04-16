import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatonBarComponent } from './navigaton-bar.component';

describe('MainPageComponent', () => {
  let component: NavigatonBarComponent;
  let fixture: ComponentFixture<NavigatonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatonBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
