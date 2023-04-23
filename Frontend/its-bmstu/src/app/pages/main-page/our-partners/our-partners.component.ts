import {Component, Input, OnInit} from '@angular/core';
import {UrlsProviderService} from "../../../../services/urls-provider.service";
import {EventDataDto} from "../../../../services/event-data.dto";
import {PartnersDto} from "../../../../services/partners-dto";

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent implements OnInit {

  @Input() slug: string | undefined;

  // images: CarouselImage[] = [];
  images: CarouselImage[] = [
    {path: 'https://its-bmstu.ru/media/actions/photo_partner/bmstu.png'},
    {path: 'https://its-bmstu.ru/media/actions/photo_partner/%D0%A1%D1%82%D1%83%D0%B4.jpg'},
    {path: 'https://its-bmstu.ru/media/actions/photo_partner/%D1%81%D1%82%D1%83%D0%B4_%D0%B8%D1%83.jpg'},
    {path: 'https://fintech.tinkoff.ru/","icon":"https://its-bmstu.ru/media/actions/photo_partner/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-04-03_%D0%B2_14.42.09_GYjmrhj.png'},{path: 'https://its-bmstu.ru/media/actions/photo_partner/bmstu.png'},
    {path: 'https://its-bmstu.ru/media/actions/photo_partner/%D0%A1%D1%82%D1%83%D0%B4.jpg'},
    {path: 'https://its-bmstu.ru/media/actions/photo_partner/%D1%81%D1%82%D1%83%D0%B4_%D0%B8%D1%83.jpg'},
    {path: 'https://fintech.tinkoff.ru/","icon":"https://its-bmstu.ru/media/actions/photo_partner/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-04-03_%D0%B2_14.42.09_GYjmrhj.png'},{path: 'https://its-bmstu.ru/media/actions/photo_partner/bmstu.png'},
    {path: 'https://its-bmstu.ru/media/actions/photo_partner/%D0%A1%D1%82%D1%83%D0%B4.jpg'},
    {path: 'https://its-bmstu.ru/media/actions/photo_partner/%D1%81%D1%82%D1%83%D0%B4_%D0%B8%D1%83.jpg'},
    {path: 'https://fintech.tinkoff.ru/","icon":"https://its-bmstu.ru/media/actions/photo_partner/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-04-03_%D0%B2_14.42.09_GYjmrhj.png'},
  ];

  constructor(private ulrsProviderService: UrlsProviderService) {
  }

  ngOnInit(): void {
    console.log(this.slug);

    if (this.slug !== undefined) {
      fetch(this.ulrsProviderService.getEventPartnersUrl(this.slug))
        .then(response => response.json())
        .then(eventDataDto => {
          let eventDataDtoTyped = eventDataDto as EventDataDto;

          // for (let i = 0; i < 10; i++) {
          //   eventDataDtoTyped.partners.push(eventDataDtoTyped.partners[0]);
          // }

          for (let i = 0; i < eventDataDtoTyped.partners.length; i++) {
            let imageUrl = eventDataDto.partners[i].icon;
            this.images.push({path: imageUrl});
          }
        });
    } else {
      //TODO download all partners for the main page
      // if (true){
      //   this.processPartnersDto({
      //     partners: [
      //       {icon: "../../../assets/images/bauman-code-games.png"},
      //       {icon: "../../../assets/images/bauman-code-games.png"},
      //       {icon: "../../../assets/images/bauman-code-games.png"},
      //       {icon: "../../../assets/images/bauman-code-games.png"},
      //       {icon: "../../../assets/images/bauman-code-games.png"},
      //     ]
      //   } as PartnersDto);
      // }
      //
      // else {
        fetch(this.ulrsProviderService.getPartnersUrl())
          .then(response => response.json())
          .then(partnersDto => {
            let partnersDtoTyped = partnersDto as PartnersDto;
            this.processPartnersDto(partnersDtoTyped);
          });
      // }


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
  }

  private processPartnersDto(partnersDtoTyped: PartnersDto) {
    for (let i = 0; i < partnersDtoTyped.partners.length; i++) {
      let imageUrl = partnersDtoTyped.partners[i].icon;
      this.images.push({path: imageUrl});
    }
  }
}
export interface CarouselImage {
  path: string;
}
