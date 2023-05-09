import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/portfolio/encabezado/encabezado.component';
import { HeaderComponent } from './componentes/portfolio/header/header.component';
import { AcercaDeComponent } from './componentes/portfolio/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/portfolio/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/portfolio/educacion/educacion.component';
import { SkillsComponent } from './componentes/portfolio/skills/skills.component';
import { ContactoComponent } from './componentes/portfolio/contacto/contacto.component';
import { HttpClientModule } from  '@angular/common/http';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { ReactiveFormsModule} from '@angular/forms'
import { AngularFireModule} from '@angular/fire/compat'
import { enviroment } from 'src/assets/environment/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { EducacionEditComponent } from './componentes/edicion/educacion-edit/educacion-edit.component';
import { ExperienciaEditComponent } from './componentes/edicion/experiencia-edit/experiencia-edit.component';
import { AcercaDeEditComponent } from './componentes/edicion/acerca-de-edit/acerca-de-edit.component';
import { SkillsEditComponent } from './componentes/edicion/skills-edit/skills-edit.component';

// import { ToastrModule } from 'ngx-toastr';
// import { RouterModule, Routes } from '@angular/router';
// const appRoutes:Routes=[];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ContactoComponent,
    PortfolioComponent,
    LoginComponent,
    RecuperarComponent,
    RegistrarComponent,
    SpinnerComponent,
    VerificarCorreoComponent,
    EducacionEditComponent,
    ExperienciaEditComponent,
    AcercaDeEditComponent,
    SkillsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// export class Educacion {

 
