import { RotasComponentComponent } from './rotas-component/rotas-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, //path é o caminho da URL
  { path: 'rotas', component: RotasComponentComponent,
    children:[
     {
      path: 'result',
      component: ResultComponent
     },
     {
      path: 'not-found',
      component: NotFoundComponent
     }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // aqui estamos passando as nossas rotas para o RouterModule
  exports: [RouterModule]
})
export class AppRoutingModule { }

