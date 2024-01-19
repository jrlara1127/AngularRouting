
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AuthGuard } from '../services/auth.guard';
import { ConfirmExitGuard } from '../services/confirm-exit.guard';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
 
import { LessonDetailComponent } from './lesson/lesson-detail.component';  
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseResolver } from './services/course.resolver';
import { LessonsResolver } from './services/lessons.resolver';
import { LessonDetailResolver } from './services/lesson-detail.resolver';


const routes: Routes = [
      {
        path: "",
        component: HomeComponent 
      },
      {
        path:":courseUrl",
        component: CourseComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        canDeactivate: [ConfirmExitGuard],
        children:[
          { path: "",
            component: LessonsListComponent,
            resolve: {
              lessons: LessonsResolver
            }
          },
          {
            path:"lessons/:lessonSeqNo",
            component: LessonDetailComponent,
            resolve: {
              lesson: LessonDetailResolver
            }
          }
        ],
        resolve:{
          course: CourseResolver
        }
      }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonsResolver,
    LessonDetailResolver,
    AuthGuard,
    ConfirmExitGuard
  ]
})
export class CoursesRoutingModule {



}
