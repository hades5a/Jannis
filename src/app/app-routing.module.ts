import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodolisteComponent } from './components/todoliste/todoliste.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todoliste', component: TodolisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
