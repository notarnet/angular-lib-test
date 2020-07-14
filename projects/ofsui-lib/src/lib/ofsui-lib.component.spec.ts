import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfsuiLibComponent } from './ofsui-lib.component';

describe('OfsuiLibComponent', () => {
  let component: OfsuiLibComponent;
  let fixture: ComponentFixture<OfsuiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfsuiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfsuiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
