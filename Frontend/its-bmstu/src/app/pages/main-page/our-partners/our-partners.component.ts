import { Component } from '@angular/core';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent {
  images = [
    {path: '../../../assets/images/bauman-code-games.png'},
    {path: '../../../assets/images/background-image.png'},
    {path: '../../../assets/images/bauman-code-games.png'},
    {path: '../../../assets/images/background-image.png'},
    {path: '../../../assets/images/bauman-code-games.png'},
    {path: '../../../assets/images/background-image.png'},
    {path: '../../../assets/images/bauman-code-games.png'},
    {path: '../../../assets/images/bauman-code-games.png'},
    {path: '../../../assets/images/background-image.png'},
    {path: '../../../assets/images/bauman-code-games.png'},
  ];
  // carouselConfig = {
  //   centerMode: true,
  //   centerPadding: '20%',
  //   slidesToShow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // };
}
