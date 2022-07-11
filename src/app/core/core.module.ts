// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// IMPORT MODULES

// IMPORTS INTERCEPTORS
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';

// IMPORTS GUARDS
import { AuthGuard } from './guards/auth.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';

// IMPORT COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { TaskSearchComponent } from './navbar/task-search/task-search.component';

// IMPORTS SERVICES
import { AuthService } from './shared/auth.service';
import { TaskService } from './pages/tasks/shared/task.service';
import { StorageService } from './shared/storage/storage.service';

// IMPORT NGX-TOAST
import { ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    NavbarComponent,
    TaskSearchComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    ToastNoAnimationModule.forRoot(({
      timeOut: 1000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      //maxOpened: 1
    })),
  ],
  exports: [
    NavbarComponent,
    TaskSearchComponent
  ],
  providers: [
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    { provide: TaskService, useClass: TaskService },
    StorageService,
    AuthGuard,
    NotAuthenticatedGuard
  ]
})
export class CoreModule { }
