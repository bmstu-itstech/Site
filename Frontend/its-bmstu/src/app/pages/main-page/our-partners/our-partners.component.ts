import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('carousel') carousel: ElementRef | undefined;

  // images: CarouselImage[] = [];
  images: CarouselImage[] = [
    // {path: 'https://its-bmstu.ru/media/actions/photo_partner/Edge.jpg'},
    // {path: 'https://its-bmstu.ru/media/actions/photo_partner/qaiu5t69t3zcnkx5yccgrk3l91t89jek.jpg'},
    // {path: 'https://its-bmstu.ru/media/actions/photo_partner/YbFdyeHSsu4.jpg'},
    // {path: 'https://its-bmstu.ru/media/actions/photo_partner/S-IYLXTw268.jpg'},
    // {path: 'https://its-bmstu.ru/media/actions/photo_partner/KQ35hPG7bHs.jpg'}
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

          for (let i = 0; i < eventDataDtoTyped.partners.length; i++) {
            let imageUrl = eventDataDto.partners[i].icon;
            this.images.push({path: imageUrl});
          }
        });
    } else {
    //   //TODO download all partners for the main page

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
      //else {
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
    for (let i = 0; i < partnersDtoTyped.results.length; i++) {
      let imageUrl = partnersDtoTyped.results[i].icon;
      this.images.push({path: imageUrl});
    }
    // @ts-ignore
    this.carousel?.next()
  }
}
export interface CarouselImage {
  path: string;
}
