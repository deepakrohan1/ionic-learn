import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  constructor(private router: Router,
    private navCtrl: NavController,
    private actRoute: ActivatedRoute,
    private placeService: PlacesService) { }

  ngOnInit() {

    this.actRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place =  this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

  /**
   * Navigate to the map page but uses the right animation to navigate back
   */
  onBookPlace() {
    console.log('Booked!');
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
    // Make sure the stackk is empty. The stack is should always have data
    // this.navCtrl.pop();
  }

}
