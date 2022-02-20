import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [{path: 'about', component:AboutComponent},
                        {path: 'contact', component:ContactComponent},
                        {path: 'portfolio', component:PortfolioComponent},
                        {path: 'skills', component:SkillsComponent},
                        {path: 'home', component:HomeComponent}];
                    
    


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
