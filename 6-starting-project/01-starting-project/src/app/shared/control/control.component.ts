import { Component, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  //A forma comentada abaixo é desencorajada e existe apenas por questões de
  //compatibilidade a forma correta é usando o host element na classe.
  //@HostBinding('class') className = 'control';
  //@HostListener('click') onClick(){
  //   console.log('Clicked');
  // }
  label = input.required<string>();

  onClick(){
    console.log('Clicked');
  }
}
