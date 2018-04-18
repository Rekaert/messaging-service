import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// * import { HttpreqService } from './httpreq.service'; http kérés szervíz létrehozása a loginhoz?

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { RestfulapiComponent } from './restfulapi/restfulapi.component';
import { ContactComponent } from './contact/contact.component';
import { MessagingServiceComponent } from './messaging-service/messaging-service.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'restfulapi', component: RestfulapiComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    KnowledgeComponent,
    RestfulapiComponent,
    ContactComponent,
    MessagingServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes) // ***
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
