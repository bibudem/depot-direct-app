import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MaintenanceComponent} from "./maintenance/maintenance.component";

// Déclaration des routes
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: '', redirectTo: '/file-upload', pathMatch: 'full' },  // Redirection par défaut
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '**', component: NotFoundComponent }
  //{ path: '**', redirectTo: '/maintenance' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
