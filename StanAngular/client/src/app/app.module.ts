import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MembersDetailComponent } from './members/members-detail/members-detail.component';
import { ListsComponent } from './lists/lists.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';
import { HasRoleDirective } from './_directives/has-role.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Register2Component } from './register/register2/register2.component';
import { RolesModalComponent } from './modals/roles-modal/roles-modal.component';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { MembersEditComponentComponent } from './members/members-edit/members-edit-component/members-edit-component.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { BuywindowComponent } from './buywindow/buywindow.component';
import { ApartmentCardComponent } from './apartment-card/apartment-card/apartment-card.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload/photo-upload.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddingAdressComponent } from './register/addingadress/adding-adress/adding-adress.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    AdminPanelComponent,
    MembersListComponent,
    MembersDetailComponent,
    ListsComponent,
    HasRoleDirective,
    UserManagementComponent,
    PhotoManagementComponent,
    Register2Component,
    RolesModalComponent,
    PhotoEditorComponent,
    MembersEditComponentComponent,
    MemberCardComponent,
    BuywindowComponent,
    ApartmentCardComponent,
    PhotoUploadComponent,
    AddingAdressComponent,
    CarouselComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    TabsModule,
    MatButtonModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RolesModalComponent]
})
export class AppModule { }
