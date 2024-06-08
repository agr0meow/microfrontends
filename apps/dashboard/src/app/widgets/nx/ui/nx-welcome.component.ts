import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ng-mf-nx-welcome',
  standalone: true,
  imports: [ RouterLink],
 template: `
  <section>
    <h2>Основное приложение </h2>
    <button routerLink="./research" >перейти в основном приложении на страницу вложенную</button>
  </section>
 `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export default class NxWelcomeComponent {}
