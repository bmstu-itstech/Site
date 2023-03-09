import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfografikaComponent } from './infografika.component';

describe('InfografikaComponent', () => {
  let component: InfografikaComponent;
  let fixture: ComponentFixture<InfografikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfografikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfografikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
