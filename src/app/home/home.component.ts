import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EggsDataService } from '../eggs-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  src = false
  collection = false
  @ViewChild('videoPlayer') videoPlayer: ElementRef

  constructor(private eggData: EggsDataService) { }

  toggleVideo(event: any) {
    this.videoPlayer.nativeElement.play();
  }
  maggieClicked() {
    return this.src = true
  }

  ngOnInit() {
  }

}
