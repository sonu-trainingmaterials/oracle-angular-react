import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: CustomerDashboardComponent,
        canActivate:[ AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent } ,
    { path: '**', redirectTo:'dashboard'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule { }
