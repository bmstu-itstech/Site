import {EventDtoLinkItem} from "./event-dto-link.item";
import {EventDataDtoPartnerItem} from "./event-data-dto-partner.item";

export interface EventDataDto {

  title: string;
  description: string;
  short_description: string;
  main_organizer: string;
  links: EventDtoLinkItem[];
  partners: EventDataDtoPartnerItem[];
  video: string;
  slug: string;
}

