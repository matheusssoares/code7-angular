import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DozeComponent } from './doze/doze.component';
import { HomeComponent } from './home/home.component';
import { TrezeComponent } from './treze/treze.component';

const routes: Routes = [
  {
    path: 'questao-13', component: TrezeComponent
  },
  {
    path: 'questao-12', component: DozeComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
