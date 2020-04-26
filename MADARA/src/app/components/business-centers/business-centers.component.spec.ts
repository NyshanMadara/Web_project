import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCentersComponent } from './business-centers.component';

describe('BusinessCentersComponent', () => {
  let component: BusinessCentersComponent;
  let fixture: ComponentFixture<BusinessCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
