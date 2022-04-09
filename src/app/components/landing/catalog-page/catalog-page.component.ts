import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/core/service/offers-service/offers.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  offers: any;
  dataFromServer: any;
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getAllOffers().subscribe(data => {
      this.dataFromServer = data;
      for (const el in this.dataFromServer) {
        this.dataFromServer[el]['id'] = el;
      }
      this.offers = Object.values(data);
    })
  }

}
