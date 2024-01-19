
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CustomPreloadingStrategy } from './services/custom-preloading.strategy';
import { CanLoadAuthGuard } from './services/can-load-auth.guard';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
      pathMatch: "full"
  },
  {
    path: "courses",
    loadChildren: () => import('./courses/courses.module')
                          .then(m => m.CoursesModule),
                           canLoad: [CanLoadAuthGuard],
     data: {
        preload: false
     }
  },
  {
      path: "login",
      component: LoginComponent
  },
  {
      path: "about",
      component: AboutComponent
  },
  {
      path: 'helpdesk-chat',
      component: ChatComponent,
      outlet: 'chat'
  },
  {
      path: "**",
      component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: CustomPreloadingStrategy,
        scrollPositionRestoration: 'enabled',
        paramsInheritanceStrategy: 'always'
      })
  ],
  exports: [RouterModule],
  providers: [
    CanLoadAuthGuard,
    CustomPreloadingStrategy
  ]
})
export class AppRoutingModule {


}
