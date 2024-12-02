import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon';
import { PokemonAPIService } from '../../services/pokemon-api.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'tablePokemon',
  standalone: true,
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  imports: [
    MatTableModule,
    CommonModule,
    MatIcon,
    RouterModule,
    SharedModule
  ]
})
export class PokemonTable implements OnInit {
  displayedColumns: string[] = ['name', 'url', 'actions'];
  dataSource: Pokemon[] = [];

  constructor(private service: PokemonAPIService) {}

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  getDataFromAPI(): void {
    this.service.getPokemons().subscribe({
      next: (pokemons) => {
        this.dataSource = pokemons;
      },
      error: (error) => {
        console.error("Error al obtener pokemons", error);
      }
    });
  }

  addToFavorites(element: Pokemon): void {
    let favoritos: Pokemon[] = JSON.parse(localStorage.getItem('favoritos') || '[]');
  
    if (!favoritos.some(fav => fav.name === element.name)) {
      favoritos.push(element);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
  
      Swal.fire({
        title: '¡Agregado a Favoritos!',
        text: `${element.name} ahora está en tu lista de favoritos.`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 3000
      });
    } else {
      Swal.fire({
        title: 'Ya está en Favoritos',
        text: `${element.name} ya se encuentra en tu lista.`,
        icon: 'info',
        confirmButtonText: 'Aceptar',
        timer: 3000
      });
    }
  }
  
  

  viewDetails(element: Pokemon): void {
    console.log(`Ver detalles del producto: ${element.name}`);
  }
}
