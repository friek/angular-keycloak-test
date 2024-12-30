import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h1>Keycloak test application</h1>
    <div>
      Links:
      <ul>
        <li><a routerLink="/test">Test</a></li>
      </ul>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
