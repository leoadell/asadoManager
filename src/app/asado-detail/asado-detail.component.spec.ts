import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsadoDetailComponent } from './asado-detail.component';

describe('AsadoDetailComponent', () => {
  let component: AsadoDetailComponent;
  let fixture: ComponentFixture<AsadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
