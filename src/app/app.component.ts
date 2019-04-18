import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackathonEasterEgg';
 src = false
  @ViewChild('videoPlayer') videoplayer: ElementRef;

toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
maggieClicked(){
return this.src = true
}
}
