import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  exampleHero: Hero = {
    id: 1,
    name: 'Exampleman'
  };

  heroes = HEROES;
 
  constructor() { }
 
  ngOnInit() {
  }
 
selectedHero: Hero;
saveHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

save(): void {
  let inputField = document.querySelector('input').value;
  this.selectedHero.name = inputField;

}

}
