import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicsComponent } from './infographics.component';

describe('InfographicsComponent', () => {
  let component: InfographicsComponent;
  let fixture: ComponentFixture<InfographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
