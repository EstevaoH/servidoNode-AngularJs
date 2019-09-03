import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarIntegranteComponent } from './buscar-integrante.component';

describe('BuscarIntegranteComponent', () => {
  let component: BuscarIntegranteComponent;
  let fixture: ComponentFixture<BuscarIntegranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarIntegranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
