import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCollectionComponent } from './events-collection.component';

describe('EventsCollectionComponent', () => {
  let component: EventsCollectionComponent;
  let fixture: ComponentFixture<EventsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
