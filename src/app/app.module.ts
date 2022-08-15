import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HardsoftComponent } from './components/hardsoft/hardsoft.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { IconosComponent } from './components/iconos/iconos.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewSobremiComponent } from './components/sobremi/new-sobremi.component';
import { EditSobremiComponent } from './components/sobremi/edit-sobremi.component';
import { NewAcercadeComponent } from './components/acercade/new-acercade.component';
import { EditAcercadeComponent } from './components/acercade/edit-acercade.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewHardsoftComponent } from './components/hardsoft/new-hardsoft.component';
import { EditHardsoftComponent } from './components/hardsoft/edit-hardsoft.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SocialComponent,
    BannerComponent,
    HeaderComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HardsoftComponent,
    ProyectosComponent,
    IconosComponent,
    SobremiComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSobremiComponent,
    EditSobremiComponent,
    NewAcercadeComponent,
    EditAcercadeComponent,
    NewProyectosComponent,
    EditProyectosComponent,
    NewHardsoftComponent,
    EditHardsoftComponent,
    HabilidadesComponent,
    NuevaHabilidadComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
