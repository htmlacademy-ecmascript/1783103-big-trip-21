import {randomBoolean,getRandomArrayElement,getRandomNumber, getRandomValue,getRandomInteger, generateRandomDate} from '../utils/utils.js';
import { CITIES,TYPE, UUID,POINT_COUNT,DESTINATION_COUNT,DESCRIPTION } from '../utils/const.js';
import Observable from '../framework/observable.js';

export default class MockService extends Observable {
  #points = [];

  constructor(){
    super();
    this.#points = this.generatePoints();
  }

  generateDestination(destinationAmount) {
    return Array.from({ length: destinationAmount }, () => ({
      id: self.crypto.randomUUID(),
      description:DESCRIPTION,
      name:getRandomArrayElement(CITIES),
      pictures: Array.from({length:DESTINATION_COUNT}, () => ({
        src:`https://loremflickr.com/248/152?random=${getRandomNumber()}`,
        pictureDescription:UUID,
      })
      )
    }));
  }

  generateOffers(offersAmount) {
    return TYPE.map((type) => ({
      type,
      offers : Array.from({length: offersAmount}, () => ({
        id: self.crypto.randomUUID(),
        title: `Offer ${type}`,
        offerPrice: getRandomNumber(),
      })
      )
    }));
  }

  generatePoints() {
    return Array.from({ length: POINT_COUNT }, () => ({
      id: self.crypto.randomUUID(),
      eventDate: generateRandomDate(new Date(2023, 1, 1), new Date()),
      dateFrom: generateRandomDate(new Date(2023, 1, 1), new Date()),
      dateTo: generateRandomDate(new Date(2023, 1, 1), new Date()),
      price: getRandomNumber(),
      type: getRandomArrayElement(TYPE),
      isFavorite: randomBoolean,
      offers: this.generateOffers(
        getRandomInteger(0, 5),
      ),
      destinations: getRandomValue(
        this.generateDestination(3),
      ),
    }));
  }


  getPoints (){
    return this.#points;
  }


  updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }
}
