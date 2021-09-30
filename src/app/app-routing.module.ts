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
  {path:'dopoLogin', component: DopoLoginComponent, canActivate: [AuthGuardService]},
  {path:'addressForm', component: AddressFormComponent, canActivate: [AuthGuardService]},
  {path:'modal' , component: ModalBootstrapComponent},
  {path:'dnd' , component: DragDropComponent},
  {path:'upload' , component: UploadComponent},
  {path:'traduzione' , component: TraduzioneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
