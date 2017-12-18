import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

const DOGS_KEY = makeStateKey('dogs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Pasta Pirate');
    this.metaService.addTag({name: 'description', content: 'Avec votre équipage gérez votre butin, partez remplir la cale de votre navire et gérer vos cartes aux trésor. Ou alors faites juste à manger.'});
  }
}
