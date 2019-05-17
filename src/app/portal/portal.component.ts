import { Component, OnInit } from '@angular/core';
import { EggApiService } from '../egg-api.service';
import { EggsDataService } from '../eggs-data.service';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  egg: any

  constructor(public eggAPI: EggApiService, public eggData: EggsDataService) { }


  ngOnInit() {
    this.eggAPI.getEggs().subscribe(result => {
      this.egg = result;
    });
    this.eggData.pickLandscape();
    this.eggData.getEggInfo();
  }

  status = false;

  clickEvent() {
    this.status = !this.status;
  }

}
