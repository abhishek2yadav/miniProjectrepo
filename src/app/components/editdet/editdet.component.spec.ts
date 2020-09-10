import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetComponent } from './editdet.component';

describe('EditdetComponent', () => {
  let component: EditdetComponent;
  let fixture: ComponentFixture<EditdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
