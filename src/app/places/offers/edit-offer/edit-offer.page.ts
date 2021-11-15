import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../offers.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  offer: Offer;
  
  constructor(private route: ActivatedRoute, 
    private offsetService: OffersService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('offerId')) {
        return;
      }
      const offerId = paramMap.get('offerId');
      this.offer = this.offsetService.getOffer(offerId);
    });

  }

}
