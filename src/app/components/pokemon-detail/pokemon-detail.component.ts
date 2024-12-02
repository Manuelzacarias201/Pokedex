import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonAPIService } from '../../services/pokemon-api.service';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  imports: [
    SharedModule,
    CommonModule,
    RouterLink
  ]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: PokemonAPIService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.service.getPokemonsByName(name).subscribe({
        next: (data) => {
          this.pokemon = data;
        },
        error: () => {
          this.error = true;
        }
      });
    }
  }

}
