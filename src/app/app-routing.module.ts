import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'cantantes',
    loadChildren: () => import('./pages/cantantes/cantantes.module').then( m => m.CantantesPageModule)
  },
  {
    path: 'studios',
    loadChildren: () => import('./pages/studios/studios.module').then( m => m.StudiosPageModule)
  },
  {
    path: 'create-studio',
    loadChildren: () => import('./pages/create-studio/create-studio.module').then( m => m.CreateStudioPageModule)
  },
  {
    path: 'detailstudio/:id',
    loadChildren: () => import('./pages/detailstudio/detailstudio.module').then( m => m.DetailstudioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/sesion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./pages/sesion/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/sesion/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'concierto-create',
    loadChildren: () => import('./concierto/concierto-create/concierto-create.module').then( m => m.ConciertoCreatePageModule)
  },
  {
    path: 'concierto-detail/:id',
    loadChildren: () => import('./concierto/concierto-detail/concierto-detail.module').then( m => m.ConciertoDetailPageModule)
  },
  {
    path: 'concierto-list',
    loadChildren: () => import('./concierto/concierto-list/concierto-list.module').then( m => m.ConciertoListPageModule)
  },
  {
    path: 'concierto-home',
    loadChildren: () => import('./concierto/concierto-home/concierto-home.module').then( m => m.ConciertoHomePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
