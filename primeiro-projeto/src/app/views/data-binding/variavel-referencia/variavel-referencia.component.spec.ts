import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariavelReferenciaComponent } from './variavel-referencia.component';

describe('VariavelReferenciaComponent', () => {
  let component: VariavelReferenciaComponent;
  let fixture: ComponentFixture<VariavelReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariavelReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariavelReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
