import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeNumerosComponent } from './tabla-de-numeros.component';

describe('TablaDeNumerosComponent', () => {
  let component: TablaDeNumerosComponent;
  let fixture: ComponentFixture<TablaDeNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDeNumerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaDeNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
