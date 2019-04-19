import { Component, OnInit } from '@angular/core';
import { EggApiService } from '../egg-api.service'
import { EggsDataService } from '../eggs-data.service';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  egg: any

  constructor(private eggAPI: EggApiService, private eggData: EggsDataService) {

  }


  ngOnInit() {
    this.eggAPI.getEggs().subscribe(result => {
      this.egg = result;

    })
  }

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

}
