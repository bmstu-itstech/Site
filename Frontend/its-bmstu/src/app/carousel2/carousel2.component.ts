import {Component, OnInit} from '@angular/core';
import {animate, AnimationBuilder, AnimationPlayer, state, style, transition, trigger} from "@angular/animations";
//
// import {
//   trigger,
//   style,
//   state,
//   animate,
//   transition,
// } from '@angular/animations';

export const EnabledStateChange = [
  trigger('enabledStateChange', [
    state(
      'default',
      style({
        opacity: 1,
      })
    ),
    state(
      'disabled',
      style({
        opacity: 0.5,
      })
    ),
    transition('* => *', [
      animate(
        '200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        style({ transform: 'scale(1.01)' })
      ),
      animate(
        '200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        style({ transform: 'scale(1)' })
      ),
      animate('300ms'),
    ]),
  ]),
];

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.scss']
  // animations: [
  //    trigger('moveAndScale', [
  //     state('in', style({ transform: 'translateX(0) scale(1)' })),
  //     transition('void => *', [
  //       style({ transform: 'translateX(-100%) scale(0)' }),
  //       animate('500ms ease-out')
  //     ]),
  //     transition('* => void', [
  //       animate('500ms ease-in', style({ transform: 'translateX(100%) scale(0)' }))
  //     ])
  //   ])
  // ]
})
export class Carousel2Component implements OnInit {

  constructor(private animationBuilder: AnimationBuilder) {

  }

  // constructor(props) {
  //   // setTimeout(() => {
  //   //   transition('open => closed', [
  //   //     animate('1s')
  //   //   ]);
  //   // }, 6000);
  //
  // }
  private player: AnimationPlayer | undefined;
  //test: string;
  animate(){
      //this.player?.play();
  }

  ngOnInit() {

    this.

    //const myAnimation = this.animationBuilder.build([
// make scaling from 1 to 2

//      animate(1000, style({ width: 1000 }))
    //]);

    this.player = myAnimation.create(document.getElementById('my-element'));

  }

}
