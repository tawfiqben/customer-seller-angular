import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { ListSalesComponent } from './list-sales/list-sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { SellersComponent } from './sellers/sellers.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: "", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "error", component: ErrorComponent },
  {
    path: "admin", component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "home", component: HomeComponent },
      { path: "profile", component: ProfileComponent },
      {
        path: "orders", component: ListOrdersComponent,
        canActivate: [AuthorizationGuard], data: { roles: ['ADMIN', 'CUSTOMER'] }
      },
      {
        path: "sales", component: ListSalesComponent,
        canActivate: [AuthorizationGuard], data: { roles: ['ADMIN', 'SELLER'] }
      },
      { path: "dashboard", component: DashboardComponent },
      {
        path: "customers", component: CustomersComponent,
        canActivate: [AuthorizationGuard], data: { roles: ['ADMIN'] }
      },
      {
        path: "sellers", component: SellersComponent,
        canActivate: [AuthorizationGuard], data: { roles: ['ADMIN'] }
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
