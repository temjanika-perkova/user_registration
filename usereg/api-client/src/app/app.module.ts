import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UserService } from "./user.service";

import { AppComponent } from './app.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { HomeComponent } from './home/home.component';
import { DetailsuserComponent } from './detailsuser/detailsuser.component';

/**
 * These are the app routes for the different components
 * @type {({path: string; component: HomeComponent} | {path: string; component: RegisteruserComponent} | {path: string; component: DetailsuserComponent})[]}
 */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registerUser', component: RegisteruserComponent },
  { path: 'detailsUser/:id', component: DetailsuserComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    HomeComponent,
    DetailsuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
