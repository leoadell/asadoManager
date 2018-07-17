import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsadoItemComponent } from './asado-item.component';

describe('AsadoItemComponent', () => {
  let component: AsadoItemComponent;
  let fixture: ComponentFixture<AsadoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsadoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsadoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
