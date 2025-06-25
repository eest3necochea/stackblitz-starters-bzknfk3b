import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisLibrosLista } from './mis-libros-lista';

describe('MisLibrosLista', () => {
  let component: MisLibrosLista;
  let fixture: ComponentFixture<MisLibrosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisLibrosLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisLibrosLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
