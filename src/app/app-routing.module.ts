import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortafolioComponent } from './portafolio/portafolio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'portafolio', component: PortafolioComponent }
  
];

@NgModule({
  imports: [  RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
