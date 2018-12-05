import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SymptomReadComponent} from './symptoms/symptom-read/symptom-read.component';
import {SymptomCreateComponent} from './symptoms/symptom-create/symptom-create.component';
import {SymptomsComponent} from './symptoms/symptoms.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SymptomsAllComponent} from './symptoms/symptoms-all/symptoms-all.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'symptoms',
    component: SymptomsComponent,
    children: [
      {
        path: '',
        component: SymptomsAllComponent,
        data: {title: 'Symptoms'}
      },
      {
        path: 'create',
        component: SymptomCreateComponent,
        data: {title: 'Track symptoms'}
      },
      {
        path: ':id',
        component: SymptomsAllComponent,
        data: {title: 'Symptoms'}
      }
    ],
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SymptomsComponent,
    SymptomReadComponent,
    SymptomCreateComponent,
    NotFoundComponent,
    SymptomsAllComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
