import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { GmapComponent } from './gmap/gmap.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { UploadComponent } from './upload/upload.component';
import { ColorDirective } from './Direttive/color.directive';
import { DragdropDirective } from './Direttive/dragdrop.directive';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TraduzioneComponent } from './traduzione/traduzione.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { TypeaheadSearchComponent } from './typeahead-search/typeahead-search.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormComponent } from './form/form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FileSaverComponent } from './file-saver/file-saver.component';
import { EserciziComponent } from './esercizi/esercizi.component';
import { CorniceComponent } from './cornice/cornice.component';
import { LoginAutenticazioneComponent } from './login-autenticazione/login-autenticazione.component';
//import { FileSaverModule } from 'ngx-filesaver';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    DndDirective,
    UploadComponent,
    ColorDirective,
    DragdropDirective,
    TraduzioneComponent,
    DropDownComponent,
    TypeaheadComponent,
    TypeaheadSearchComponent,
    ProfileEditorComponent,
    FormComponent,
    SidebarComponent,
    FileSaverComponent,
    EserciziComponent,
    CorniceComponent,
    LoginAutenticazioneComponent,
    CheckboxComponent   
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
      MatSnackBarModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      NgbModule,
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NgxTypeaheadModule/*,
    FileSaverModule  */    
  ],
  exports: [
    MatSnackBarModule],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http); //qui definisco dove andare a cercare i file (se li sposto da assets/i18n)
}