import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-mf-nx-children',
  template: `
  <h1>Работает!!!</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export default class NuxChildrenComponent {

}
