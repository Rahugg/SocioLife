import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocioLife';

  openModel(event : any){
    console.log(event.composedPath())
    // @ts-ignore
    document.getElementById("modal-background-create-post").classList.toggle("modal-active")
    // @ts-ignore
    document.getElementById("modal-background-create-post").children[0].classList.toggle("modal-active")
  }
}
