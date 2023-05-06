import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"verificacion", component:VerificarCorreoComponent},
  {path:"portfolio", component:PortfolioComponent},
  {path:"recuperar", component:RecuperarComponent},
  {path:"registrar", component:RegistrarComponent},
  // {path:"",component:PortfolioComponent}
  {path: "", redirectTo: 'portfolio', pathMatch:'full' },
  {path: "**", redirectTo: 'portfolio', pathMatch:'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
