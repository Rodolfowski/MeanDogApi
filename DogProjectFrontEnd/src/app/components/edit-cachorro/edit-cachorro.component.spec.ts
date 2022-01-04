import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCachorroComponent } from './edit-cachorro.component';

describe('EditCachorroComponent', () => {
  let component: EditCachorroComponent;
  let fixture: ComponentFixture<EditCachorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCachorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
