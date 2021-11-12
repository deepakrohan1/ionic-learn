import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { Offer } from '../offers.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  offer: Offer;

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private offerService: OffersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (! paramMap.has('offerId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.offer = this.offerService.getOffer(paramMap.get('offerId'));
    });
  }

  onClickBooking() {
    console.log('Bookings');
    this.navCtrl.navigateBack('/places/tabs/offers');

  }

}
