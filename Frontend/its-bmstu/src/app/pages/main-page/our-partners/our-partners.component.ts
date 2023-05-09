import {Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
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
  title: string | undefined;
  images: CarouselImage[] = [];
  doesEventHavePartners: boolean = true;

  constructor(private ulrsProviderService: UrlsProviderService) {
  }

  ngOnInit(): void {
    console.log(this.slug);

    if (this.slug !== undefined) {
      fetch(this.ulrsProviderService.getEventPartnersUrl(this.slug))
        .then(response => response.json())
        .then(eventDataDto => {
          let eventDataDtoTyped = eventDataDto as EventDataDto;
          this.title = eventDataDtoTyped.title;
          for (let i = 0; i < eventDataDtoTyped.partners.length; i++) {
            let imageUrl = eventDataDtoTyped.partners[i].icon;
            this.images.push({path: imageUrl});
          }
          if (eventDataDtoTyped.partners.length == 0) {
            this.doesEventHavePartners = false;
          }
        });
    } else {
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
