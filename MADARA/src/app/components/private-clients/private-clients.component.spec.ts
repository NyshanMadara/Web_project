import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateClientsComponent } from './private-clients.component';

describe('PrivateClientsComponent', () => {
  let component: PrivateClientsComponent;
  let fixture: ComponentFixture<PrivateClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
