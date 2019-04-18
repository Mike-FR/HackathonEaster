import { Injectable } from '@angular/core';
import { EggApiService } from './egg-api.service'

@Injectable({
  providedIn: 'root'
})
export class EggsDataService {


  eggImg: string;
  eggName: string;
  eggsInfo: any = {}
  arrayEggs: any = []

  constructor(private eggAPI: EggApiService) { }

  getEggInfo() {
    this.eggAPI.getEggs().subscribe(result => {
      this.eggImg = result.image;
      this.eggName = result.name;
      this.eggsInfo = { img: this.eggImg, name: this.eggName }
      this.arrayEggs.push(this.eggsInfo)
      console.log(this.arrayEggs)
    })
  }
}
