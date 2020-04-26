import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCompaniesComponent } from './large-companies.component';

describe('LargeCompaniesComponent', () => {
  let component: LargeCompaniesComponent;
  let fixture: ComponentFixture<LargeCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
