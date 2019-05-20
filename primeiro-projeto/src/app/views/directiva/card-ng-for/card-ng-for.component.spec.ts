import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNgForComponent } from './card-ng-for.component';

describe('CardNgForComponent', () => {
  let component: CardNgForComponent;
  let fixture: ComponentFixture<CardNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
