import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-webcamera',
  templateUrl: './web-camera.component.html',
  styleUrls: ['./web-camera.component.css']
})
export class WebCameraComponent implements OnInit{
  @ViewChild('audioOption') audioPlayerRef: ElementRef | undefined;
  @Output() getPicture = new EventEmitter<WebcamImage>();
  webcamIsActive = true
  isCameraExists = true
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExists = mediaDevices && mediaDevices.length > 0;
      });
  }
  takeSnapshot(): void {
    const audio = new (window as any).Audio();
    audio.src = './assets/sounds/Camera-Shutter-Sound.mp3';
    audio.play();
    setTimeout(()=>{
      this.trigger.next();
    }, 500)
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.webcamIsActive = false;
  }
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
}
