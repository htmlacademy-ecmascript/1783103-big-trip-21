import {randomBoolean,getRandomArrayElement,getRandomNumber, getRandomValue,getRandomInteger} from '../utils.js';
import {CITIES,TYPE, UUID} from '../const.js';
import { POINT_COUNT,OFFER_COUNT,DESTINATION_COUNT,DESCRIPTION } from '../const.js';


export default class MockService {
  destinations = [];
  offers = [];
  point = [];

  constructor(){
    this.destinations = this.generateDestination();
    this.offers = this.generateOffers();
    this.point = this.generatePoints();
  }

  getDestinations(){
    return this.destinations;
  }

  getOffers(){
    return this.offers;
  }

  getPoints(){
    return this.point;
  }

  generateDestination() {
    return Array.from ({length:DESTINATION_COUNT}, () => ({
      id: UUID,
      description:DESCRIPTION,
      name:getRandomArrayElement(CITIES),
      pictures: Array.from({length:DESTINATION_COUNT}, () => ({
        src:`https://loremflickr.com/248/152?random=${getRandomNumber()}`,
        pictureDescription:UUID,
      })
      )
    }));
  }


  generateOffers() {
    return TYPE.map((type) => ({
      type,
      offers : Array.from({length: OFFER_COUNT}, () => ({
        id: UUID,
        title: `Offer ${type}`,
        offerPrice: getRandomNumber(),
      })
      )
    }));
  }


  generatePoints () {
  
  return Array.from({length: POINT_COUNT}, () => ({
    id:UUID,
    eventDate:'2019-03-18',
    dateFrom:'2019-03-18T10:30',
    dateTo:'2019-03-18T11:00',
    price: getRandomNumber(),
    type: getRandomArrayElement(TYPE),
    isFavorite: randomBoolean,
    hasOffers: getRandomInteger(0,1),
    offers: this.offers.slice(getRandomInteger(0, OFFER_COUNT)),
    destinations: getRandomValue(this.destinations),
  }));
};

}

