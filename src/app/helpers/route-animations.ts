import { trigger, transition, style, query, group, animateChild, animate, keyframes } from '@angular/animations';

export const fader = trigger('fader', [
  // route 'enter' transition
  transition('*<=>*', [
      // css styles at start of transition
      style({ opacity: 0 }),
      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
  ]),
]);
