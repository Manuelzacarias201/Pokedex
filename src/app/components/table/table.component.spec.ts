import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTable } from './table.component';

describe('TableComponent', () => {
  let component: PokemonTable;
  let fixture: ComponentFixture<PokemonTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
