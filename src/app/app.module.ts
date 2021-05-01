import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/store/reducers/auth';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(authReducer, {}), !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
