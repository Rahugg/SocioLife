import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignupComponent} from "./components/signup/signup.component";
import {SigninComponent} from "./components/signin/signin.component";
import {MainComponent} from "./components/main/main.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {
    //instead of 'main' there should be nickname *TODO*
    path: "main", component: MainComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", component: HomeComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  },
  {path: 'signin', component: SigninComponent},
  {path: "", redirectTo: "signin", pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: '*', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
