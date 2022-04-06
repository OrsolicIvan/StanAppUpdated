import { CarouselComponent } from './carousel/carousel/carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MembersDetailComponent } from './members/members-detail/members-detail.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload/photo-upload.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';
import { UserManagementComponent } from './admin/user-management/user-management.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
   // canActivate: [AuthGuard],
    children: [
        
        {path: 'members',component: MembersListComponent, canActivate: [AuthGuard] },
        {path: 'apEdit',component: MembersDetailComponent },
        {path: 'login',component: ListsComponent },
        {path: 'admin',component: UserManagementComponent, canActivate: [AdminGuard]},
        {path: 'photo-upload',component: PhotoUploadComponent}
        
    ]
  },  
  {path: '**',component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
