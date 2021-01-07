import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {

  @Input() appState: string;
  @HostBinding('class') nomClass: string;
  constructor() {
  }
  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: string): string {
    return `state-${state.replace(/\s/g, '').toLowerCase()}`;
  }

}
