import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCachorroComponent } from './create-cachorro.component';

describe('CreateCachorroComponent', () => {
  let component: CreateCachorroComponent;
  let fixture: ComponentFixture<CreateCachorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCachorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
