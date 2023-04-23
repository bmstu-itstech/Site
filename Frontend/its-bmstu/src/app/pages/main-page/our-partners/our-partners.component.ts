import {Component, Input, OnInit} from '@angular/core';
import {UrlsProviderService} from "../../../../services/urls-provider.service";
import {EventDataDto} from "../../../../services/event-data.dto";

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent implements OnInit {

  @Input() slug: string | undefined;

  images: CarouselImage[] = [];
  // images = [
  //   {path: '../../../assets/images/bauman-code-games.png'},
  //   {path: '../../../assets/images/background-image.png'},
  //   {path: '../../../assets/images/bauman-code-games.png'},
  //   {path: '../../../assets/images/background-image.png'},
  //   {path: '../../../assets/images/bauman-code-games.png'},
  //   {path: '../../../assets/images/background-image.png'},
  //   {path: '../../../assets/images/bauman-code-games.png'},
  //   {path: '../../../assets/images/bauman-code-games.png'},
  //   {path: '../../../assets/images/background-image.png'},
  //   {path: '../../../assets/images/bauman-code-games.png'},
  // ];

  constructor(private ulrsProviderService: UrlsProviderService) {
  }

  ngOnInit(): void {
    console.log(this.slug);

    if (this.slug !== undefined) {
      fetch(this.ulrsProviderService.getEventPartnersUrl(this.slug))
        .then(response => response.json())
        .then(eventDataDto => {
          let eventDataDtoTyped = eventDataDto as EventDataDto;

          for (let i = 0; i < 10; i++) {
            eventDataDtoTyped.partners.push(eventDataDtoTyped.partners[0]);
          }

          for (let i = 0; i < eventDataDtoTyped.partners.length; i++) {
            let imageUrl = eventDataDto.partners[i].icon;
            this.images.push({path: imageUrl});
          }
        });
    }
    /*else {
     //TODO download all partners for the main page
     //fetch(this.ulrsProviderService.getPartnersUrl())
   }*/
  }

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

export interface CarouselImage {
  path: string;
}
