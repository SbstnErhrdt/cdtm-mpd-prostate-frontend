import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import localeDe from '@angular/common/locales/de';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {ChartsModule} from 'ng2-charts';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SymptomReadComponent} from './symptoms/symptom-read/symptom-read.component';
import {SymptomCreateComponent} from './symptoms/symptom-create/symptom-create.component';
import {SymptomsComponent} from './symptoms/symptoms.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SymptomsAllComponent} from './symptoms/symptoms-all/symptoms-all.component';
import {HomeComponent} from './home/home.component';
import {ApiService} from './services/api.service';
import {registerLocaleData} from '@angular/common';
import {CalendarComponent} from './shared/calendar/calendar.component';
import {PatientsComponent} from './patients/patients.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {PatientsHomeComponent} from './patients/patients-home/patients-home.component';
import {DoctorsHomeComponent} from './doctors/doctors-home/doctors-home.component';
import {LogoutComponent} from './logout/logout.component';
import {JwtModule} from '@auth0/angular-jwt';
// the second parameter 'fr' is optional
registerLocaleData(localeDe, 'de');

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'doctors',
    component: PatientsComponent,
    children: [
      {
        path: '',
        component: PatientsHomeComponent,
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
    ]
  },
  {
    path: 'patients',
    component: PatientsComponent,
    children: [
      {
        path: '',
        component: PatientsHomeComponent,
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
    ]
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
    HomeComponent,
    CalendarComponent,
    PatientsComponent,
    DoctorsComponent,
    PatientsHomeComponent,
    DoctorsHomeComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'},
    HttpClientModule,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
