import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotReadyYetComponent } from './not-ready-yet.component';

describe('NotReadyYetComponent', () => {
  let component: NotReadyYetComponent;
  let fixture: ComponentFixture<NotReadyYetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotReadyYetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotReadyYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
