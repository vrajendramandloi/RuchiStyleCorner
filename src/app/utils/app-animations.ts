import { trigger, state, style, transition, animate } from '@angular/animations';

export let fadeoutTrigger = trigger('fadeout', [
  state('void', style({ opacity: 0 })),
  transition(':leave', [
    animate(500)
  ])
]);
