import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyListComponent } from './turkey-list.component';

describe('TurkeyListComponent', () => {
  let component: TurkeyListComponent;
  let fixture: ComponentFixture<TurkeyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkeyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
