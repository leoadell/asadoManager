import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsadoListComponent } from './asado-list.component';

describe('AsadoListComponent', () => {
  let component: AsadoListComponent;
  let fixture: ComponentFixture<AsadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
