import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationUiComponent } from './innovation-ui.component';

describe('InnovationUiComponent', () => {
  let component: InnovationUiComponent;
  let fixture: ComponentFixture<InnovationUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
