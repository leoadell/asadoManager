import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AsadoAddComponent } from './asado-add/asado-add.component';
import { AsadoListComponent } from './asado-list/asado-list.component';
import { AsadoDetailComponent } from './asado-detail/asado-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'asado/add', component: AsadoAddComponent },
    { path: 'asado/edit:id', component: AsadoAddComponent },
    { path: 'asado', component: AsadoListComponent },
    { path: 'asado/detail/:id', component: AsadoDetailComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
