import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {MainComponent} from "./main/main.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: "main", component: MainComponent,
    children : [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", component: HomeComponent},
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
export class AppRoutingModule { }
