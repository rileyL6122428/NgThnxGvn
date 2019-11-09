import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyEditorComponent } from './turkey-editor.component';

describe('TurkeyEditorComponent', () => {
  let component: TurkeyEditorComponent;
  let fixture: ComponentFixture<TurkeyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkeyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
