import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  

  private places: Place[] = [
    new Place('p1', 
    'Manhattan',
    'In Heart of NYC',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    149.99),
    new Place('p2',
    'Brooklyn',
    'In Brooklyn',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    100.99),
    new Place('p3',
    'Queens',
    'In Queens',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    99.99),
    new Place('p4',
    'Bronx',
    'In Bronx',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    79.99),
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  };

  getPlace(palceId: string): Place {
    return {...this.places.find(p => p.id === palceId)};
  }
}
