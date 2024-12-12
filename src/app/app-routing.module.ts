import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {VisualizarTrabalhosComponent} from "./componentes/visualizar-trabalhos/visualizar-trabalhos.component";
import {LoginComponent} from "./componentes/login/login.component";
//Responsável por carregar e exibir os componentes
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "visualizar-trabalhos", component: VisualizarTrabalhosComponent },
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
