import { Injectable } from '@angular/core';
import { Offer } from './offers.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: Offer[] = [
    {
      id: '1',
      title: 'Oferta 1',
      description: 'Descripción de la oferta 1',
      percent: 20,
    },
    {
      id: '2',
      title: 'Oferta 2',
      description: 'Descripción de la oferta 2',
      percent: 30,
    },
    {
      id: '3',
      title: 'Oferta 3',
      description: 'Descripción de la oferta 3',
      percent: 40,
    }
  ];

  constructor() { }

  getOffers(): Offer[] {
    return [...this.offers];
  }
}
