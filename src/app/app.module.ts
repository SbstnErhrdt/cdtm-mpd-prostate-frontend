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
import {DoctorsPatientsComponent} from './doctors/doctors-patients/doctors-patients.component';
import {MeasurementsComponent} from './measurements/measurements.component';
import {MeasurementsAllComponent} from './measurements/measurements-all/measurements-all.component';
import {MedicationComponent} from './medication/medication.component';
import {MedicationAllComponent} from './medication/medication-all/medication-all.component';
import {MedicationCreateComponent} from './medication/medication-create/medication-create.component';
import {MedicationReadComponent} from './medication/medication-read/medication-read.component';
import {WikiComponent} from './wiki/wiki.component';
import {WikiCreateComponent} from './wiki/wiki-create/wiki-create.component';
import {WikiAllComponent} from './wiki/wiki-all/wiki-all.component';
import {WikiReadComponent} from './wiki/wiki-read/wiki-read.component';
import {DoctorsPatientComponent} from './doctors/doctors-patient/doctors-patient.component';
import {DoctorsPatientOverviewComponent} from './doctors/doctors-patient/doctors-patient-overview/doctors-patient-overview.component';
import {ChartComponent} from './shared/chart/chart.component';
// the second parameter 'fr' is optional
registerLocaleData(localeDe, 'de');

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
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
    component: DoctorsComponent,
    children: [
      {
        path: '',
        component: DoctorsHomeComponent,
      },
      {
        path: 'patients',
        component: DoctorsPatientsComponent,
      },
      {
        path: 'patients/read/:id',
        component: DoctorsPatientComponent,
        children: [
          {
            path: '',
            component: SymptomsAllComponent,
            data: {title: 'Symptoms'}
          },
        ]
      },
      {
        path: 'wiki',
        component: WikiComponent,
        children: [
          {
            path: '',
            component: WikiAllComponent,
            data: {title: 'Symptoms'}
          },
          {
            path: 'create',
            component: WikiCreateComponent,
            data: {title: 'Track symptoms'}
          },
          {
            path: 'read/:id',
            component: WikiReadComponent,
            data: {title: 'Symptom'}
          }
        ],
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
            path: 'read/:id',
            component: SymptomReadComponent,
            data: {title: 'Symptom'}
          }
        ],
      },
      {
        path: 'medication',
        component: MedicationComponent,
        children: [
          {
            path: '',
            component: MedicationAllComponent,
            data: {title: 'Medication'}
          },
          {
            path: 'create',
            component: MedicationCreateComponent,
            data: {title: 'Track medication'}
          },
          {
            path: 'read/:id',
            component: MedicationReadComponent,
            data: {title: 'Medication'}
          }
        ],
      },
      {
        path: 'measurements',
        component: MeasurementsComponent,
        children: [
          {
            path: '',
            component: MeasurementsAllComponent,
            data: {title: 'Measurements'}
          },
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
        path: 'wiki',
        component: WikiComponent,
        children: [
          {
            path: '',
            component: WikiAllComponent,
            data: {title: 'Symptoms'}
          },
          {
            path: 'create',
            component: WikiCreateComponent,
            data: {title: 'Track symptoms'}
          },
          {
            path: 'read/:id',
            component: WikiReadComponent,
            data: {title: 'Symptom'}
          }
        ],
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
            path: 'create/:date',
            component: SymptomCreateComponent,
            data: {title: 'Track symptoms'}
          },
          {
            path: 'read/:id',
            component: SymptomReadComponent,
            data: {title: 'Symptom'}
          }
        ],
      },
      {
        path: 'medication',
        component: MedicationComponent,
        children: [
          {
            path: '',
            component: MedicationAllComponent,
            data: {title: 'Medication'}
          },
          {
            path: 'create',
            component: MedicationCreateComponent,
            data: {title: 'Track medication'}
          },
          {
            path: 'create/:date',
            component: MedicationCreateComponent,
            data: {title: 'Track medication'}
          },
          {
            path: 'read/:id',
            component: MedicationReadComponent,
            data: {title: 'Medication'}
          }
        ],
      },
      {
        path: 'measurements',
        component: MeasurementsComponent,
        children: [
          {
            path: '',
            component: MeasurementsAllComponent,
            data: {title: 'Measurements'}
          },
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
    LogoutComponent,
    DoctorsPatientsComponent,
    MeasurementsComponent,
    MeasurementsAllComponent,
    MedicationComponent,
    MedicationAllComponent,
    MedicationCreateComponent,
    MedicationReadComponent,
    WikiComponent,
    WikiCreateComponent,
    WikiAllComponent,
    WikiReadComponent,
    DoctorsPatientComponent,
    DoctorsPatientOverviewComponent,
    ChartComponent,
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
