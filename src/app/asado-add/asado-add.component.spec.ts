import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsadoAddComponent } from './asado-add.component';

describe('AsadoAddComponent', () => {
  let component: AsadoAddComponent;
  let fixture: ComponentFixture<AsadoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsadoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsadoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
