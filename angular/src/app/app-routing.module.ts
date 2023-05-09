import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { EducacionEditComponent } from './componentes/edicion/educacion-edit/educacion-edit.component';
import { ExperienciaEditComponent } from './componentes/edicion/experiencia-edit/experiencia-edit.component';
import { AcercaDeEditComponent } from './componentes/edicion/acerca-de-edit/acerca-de-edit.component';
import { SkillsEditComponent } from './componentes/edicion/skills-edit/skills-edit.component';

const routes: Routes = [
  // Routing de componentes
  {path:"login", component:LoginComponent},
  {path:"verificacion", component:VerificarCorreoComponent},
  {path:"portfolio", component:PortfolioComponent},
  {path:"recuperar", component:RecuperarComponent},
  {path:"registrar", component:RegistrarComponent},
  // Routings de edit
  {path:"educacionedit", component:EducacionEditComponent},
  {path:'experienciaedit', component:ExperienciaEditComponent},
  {path:'acercadeedit', component:AcercaDeEditComponent},
  {path:'tecnologiasedit', component:SkillsEditComponent},
  // Routings por defecto
  {path: "", redirectTo: 'portfolio', pathMatch:'full' },
  {path: "**", redirectTo: 'portfolio', pathMatch:'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
