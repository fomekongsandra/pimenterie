import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParticulierComponent } from './particulier/particulier.component';
import { PimentAddComponent } from './piment-add/piment-add.component';
import { PimentDetailsComponent } from './piment-details/piment-details.component';
import { PimentIndexComponent } from './piment-index/piment-index.component';

const routes: Routes = [ 
  {
    //la route par defaut 
    path:'',pathMatch:'full',redirectTo:'home'
  },
  {
    path:'piment-index',
    component:PimentIndexComponent
  },
  {
    path:'piment-details/:id',
    component:PimentDetailsComponent
  },
  {
    path:'piment-add',
    component:PimentAddComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'commentaire/:id',
    component:CommentaireComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'entreprise',
    component:EntrepriseComponent
  },
  {
    path:'particulier',
    component:ParticulierComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
