import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [ 
  {
path: '' ,
redirectTo: 'search-user', 
pathMatch: 'full'
  },
  {
    path:'search-user',
    component: SearchComponent
  },

  {
    path: 'git/:user',
    component: GithubComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
