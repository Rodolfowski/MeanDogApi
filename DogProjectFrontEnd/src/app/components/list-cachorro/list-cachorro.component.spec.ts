import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCachorroComponent } from './list-cachorro.component';

describe('ListarCachorroComponent', () => {
  let component: ListCachorroComponent;
  let fixture: ComponentFixture<ListCachorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCachorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
