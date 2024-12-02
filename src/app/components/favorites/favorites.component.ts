import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-favoritos',
  templateUrl: 'favorites.component.html',
  styleUrls: ['favorites.component.scss'],
  imports: [
    MatTableModule,
    CommonModule,
    RouterLink
  ]
})
export class FavoritosComponent implements OnInit {
  favoritos: Pokemon[] = [];
  router: any;

  constructor() {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favoritos');
    this.favoritos = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  removeFromFavorites(pokemon: Pokemon): void {
    this.favoritos = this.favoritos.filter(fav => fav.name !== pokemon.name);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}
