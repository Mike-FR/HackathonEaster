import { Injectable } from '@angular/core';
import { EggApiService } from './egg-api.service'

@Injectable({
  providedIn: 'root'
})
export class EggsDataService {


  eggImg: string;
  eggName: string;
  eggRare: string;
  eggsInfo: any = {}
  arrayEggs: any = []
  arrayLand: any = []

  currentLand: string;

  landscape = [
    '../../assets/landscape/891fd98bffd29580b267ff1df5b0a9c2.png',
    '../../assets/landscape/a1cc1c259eeae5a37cb70f0ab3b46217.jpeg',
    '../../assets/landscape/big_1473924546_image.jpg',
    '../../assets/landscape/Rick_Morty_S01_Screenshot_0159.jpg.625cd49cb726d62aa988645078714125.jpg',
    '../../assets/landscape/wp1822807.jpg',
    '../../assets/landscape/lothaire-limon-rick-morty-buttworld-final.jpg',
    '../../assets/landscape/rick-and-morty-background-21.jpg',
    '../../assets/landscape/rick-and-morty-miniverse.jpg',
    '../../assets/landscape/S3e5_resort.png',
  ]

  constructor(private eggAPI: EggApiService) { }

  pickLandscape() {
    let index = Math.floor(Math.random() * this.landscape.length)
    let keepNumTile = this.landscape[index]
    this.currentLand = keepNumTile
    return keepNumTile
  }

  getEggInfo() {
    this.eggAPI.getEggs().subscribe(result => {
      this.eggImg = result.image;
      this.eggName = result.name;
      this.eggRare = result.rarity;
      this.eggsInfo = { img: this.eggImg, name: this.eggName }
    
      this.arrayEggs.push(this.eggsInfo)

      console.log(this.arrayEggs)
    })
  }
}
