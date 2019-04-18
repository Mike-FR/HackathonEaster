import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  src = false
  @ViewChild('videoPlayer') videoplayer: ElementRef;

toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
maggieClicked(){
return this.src = true
}
  constructor() { }

  ngOnInit() {
  }

}
