import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige rutas inexistentes al Home

  
];

@NgModule({
  imports: [  RouterModule.forRoot(routes, { 
    useHash: false,
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled' })],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
