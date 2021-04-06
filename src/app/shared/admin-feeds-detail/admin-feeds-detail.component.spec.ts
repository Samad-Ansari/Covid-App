import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedsDetailComponent } from './admin-feeds-detail.component';

describe('AdminFeedsDetailComponent', () => {
  let component: AdminFeedsDetailComponent;
  let fixture: ComponentFixture<AdminFeedsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFeedsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeedsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
