import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadoListComponent } from './invitado-list.component';

describe('InvitadoListComponent', () => {
  let component: InvitadoListComponent;
  let fixture: ComponentFixture<InvitadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
