import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { GmapComponent } from './gmap/gmap.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProvaComponent } from './prova/prova.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestisciPersoneComponent } from './gestisci-persone/gestisci-persone.component';
import { NuoviRouterComponent } from './nuovi-router/nuovi-router.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { DopoLoginComponent } from './dopo-login/dopo-login.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBootstrapComponent } from './modal-bootstrap/modal-bootstrap.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DndDirective } from './Direttive/dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabBarComponent,
    GmapComponent,
    HomeComponent,
    ProvaComponent,
    HeaderComponent,
    FooterComponent,
    GestisciPersoneComponent,
    NuoviRouterComponent,
    LoginComponent,
    DopoLoginComponent,
    ModalComponent,
    AddressFormComponent,
    ModalBootstrapComponent,
    DragDropComponent,
    DndDirective  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
      JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem("access_token");
        },
        allowedDomains: ["localhost:4200","example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
      BrowserAnimationsModule,
      MatSliderModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatRadioModule,
      MatCardModule,
      ReactiveFormsModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
