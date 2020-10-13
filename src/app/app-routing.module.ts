import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexMissionsComponent } from './spacex-missions/spacex-missions.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'home',component: SpacexMissionsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: AppComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
