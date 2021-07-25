import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  { path: 'github', component: GithubComponent},

  { path: '', redirectTo:"/github", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
