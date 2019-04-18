import { Component, OnInit } from '@angular/core';
import { EggApiService } from '../egg-api.service'


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  egg: any;
  eggImg: string;
  eggName: string;

  constructor(private eggAPI: EggApiService) {

  }

  getEggImg() {
    this.eggAPI.getEggs().subscribe(result => {
      this.eggImg = result.image;
      this.eggName = result.name;
    })
  }



  ngOnInit() {
    this.eggAPI.getEggs().subscribe(result => {
      this.egg = result;

    })
  }

}
