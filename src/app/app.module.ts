import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { ViewprojectsComponent } from './controllers/viewprojects/viewprojects.component';
import { AddprojectComponent } from './controllers/addproject/addproject.component';
import { ViewtasksComponent } from './controllers/viewtasks/viewtasks.component';
import { ViewtestcasesComponent } from './controllers/viewtestcases/viewtestcases.component';
import { AddtaskComponent } from './controllers/addtask/addtask.component';
import { AddtestcaseComponent } from './controllers/addtestcase/addtestcase.component';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavigationComponent,
    SearchComponent,
    ViewprojectsComponent,
    AddprojectComponent,
    ViewtasksComponent,
    ViewtestcasesComponent,
    AddtaskComponent,
    AddtestcaseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
