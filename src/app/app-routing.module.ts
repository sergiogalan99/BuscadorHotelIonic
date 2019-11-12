import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'peticion', pathMatch: 'full' },
  { path: 'peticion', loadChildren: () => import('./peticion/peticion.module').then( m => m.PeticionPageModule)},
  { path: 'resultado', loadChildren: './resultado/resultado.module#ResultadoPageModule' },
  { path: 'habitacion', loadChildren: './habitacion/habitacion.module#HabitacionPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
