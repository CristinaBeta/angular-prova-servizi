import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestisciPersoneComponent } from './gestisci-persone/gestisci-persone.component';
import { GmapComponent } from './gmap/gmap.component';
import { HomeComponent } from './home/home.component';
import { ProvaComponent } from './prova/prova.component';
import { NuoviRouterComponent } from './nuovi-router/nuovi-router.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DopoLoginComponent } from './dopo-login/dopo-login.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ModalBootstrapComponent } from './modal-bootstrap/modal-bootstrap.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { UploadComponent } from './upload/upload.component';
import { TraduzioneComponent } from './traduzione/traduzione.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EserciziComponent } from './esercizi/esercizi.component';
import { TypeaheadSearchComponent } from './typeahead-search/typeahead-search.component';
import { LoginAutenticazioneComponent } from './login-autenticazione/login-autenticazione.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [

  {path:'' , component: HomeComponent},
  {path:'prova' , component: ProvaComponent},
  {path:'home' , component: HomeComponent},
  {path:'gmap' , component: GmapComponent},
  {path:'tab-bar' , component: GmapComponent},
  {path:'gestisciPersone' , component: GestisciPersoneComponent},
  {path:'dettaglio/:valoreDaPassare' , component: NuoviRouterComponent},
  {path:'dettaglioInterno/:id' , component: GestisciPersoneComponent},
  {path:'login' , component: LoginComponent},
  {path:'loginAut' , component: LoginAutenticazioneComponent},
  {path:'dopoLogin', component: DopoLoginComponent, canActivate: [AuthGuardService]},
  {path:'addressForm', component: AddressFormComponent},
  {path:'modal' , component: ModalBootstrapComponent},
  {path:'dnd' , component: DragDropComponent},
  {path:'upload' , component: UploadComponent},
  {path:'traduzione' , component: TraduzioneComponent},
  {path:'dropdown' , component: DropDownComponent},
  {path:'form' , component: ProfileEditorComponent, data: { title: 'Form' }},
  {path:'sidebar' , component: SidebarComponent},
  {path:'esercizi' , component: EserciziComponent},
  {path:'typeahead' , component: TypeaheadSearchComponent},
  {path:'checkbox' , component: CheckboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
