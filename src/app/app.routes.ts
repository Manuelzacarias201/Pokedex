import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTable } from './components/table/table.component'; 
import { InicioComponent } from './components/inicio/inicio.component';
import { FavoritosComponent } from './components/favorites/favorites.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, 
  { path: 'landing', component: InicioComponent }, 
  { path: 'pokemons', component: PokemonTable }, 
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'pokemons/:name', component: PokemonDetailComponent },
  { path: '**', redirectTo: '/landing' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
