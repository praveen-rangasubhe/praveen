import { Component, Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[myHighlight]', standalone: true })
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = 'red';
  }
}

@Component({
  selector: 'app-componets',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './componets.component.html',
  styleUrl: './componets.component.scss',
})
export class ComponetsComponent {
  title: string = 'Angular';
}
