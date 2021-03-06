import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Offer } from './offers.model';
import { OffersService } from './offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Offer[] = [];

  constructor(private offerService: OffersService, private router: Router) { }


  ngOnInit() {
    this.offers = this.offerService.getOffers();
  }

  onEdit(offerId: string, slidintgItem: IonItemSliding) {
    slidintgItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log('Editing item', offerId);
  }


}
