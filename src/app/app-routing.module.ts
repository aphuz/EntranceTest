import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { AnalyseComponent } from './modules/analyse/pages/analyse/analyse.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/analyse', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'analyse', component: AnalyseComponent, canActivate:[AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
