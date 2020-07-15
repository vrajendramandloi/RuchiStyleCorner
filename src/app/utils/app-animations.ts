import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export let fadeoutTrigger = trigger('fadeout', [
  state('void', style({ opacity: 0 })),
  transition(':leave', [
    animate(500)
  ])
]);
